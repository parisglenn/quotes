// import { put, call, select } from 'redux-saga/effects'
import { put, call } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
// import { change, getFormValues } from 'redux-form'
import { callApi } from 'services/rest'
// import groupBy from 'lodash/groupBy'

// Actions
const LOAD_QUOTES = 'quotes/loadQuotes'
const LOAD_QUOTES_SUCCESS = 'quotes/loadQuotesSuccess'
const NAVIGATE_QUOTE = 'quotes/navigateQuote'
const UPDATE_SELECTED_QUOTE = 'quotes/updateSelectedQuote'

// Reducer
const initialState = {
  quotes: [],
  quotesLoaded: false,
  selectedQuote: {},
  quoteId: null,
  previousIndex: null,
  nextIndex: null,
}

export default function quotesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_QUOTES_SUCCESS:
      return {
        ...state,
        quotes: action.payload.quotes,
        quotesLoaded: true,
        selectedQuote: action.payload.selectedQuote,
        quoteId: action.payload.quoteId,
        nextId: action.payload.nextId,
        previousId: action.payload.previousId,
        nextIndex: action.payload.nextIndex,
        previousIndex: action.payload.previousIndex,
      }
    case UPDATE_SELECTED_QUOTE:
      return {
        ...state,
        selectedQuote: action.payload.selectedQuote,
        previousIndex: action.payload.previousIndex,
        nextIndex: action.payload.nextIndex,
        nextId: action.payload.nextId,
        previousId: action.payload.previousId,
      }
    case NAVIGATE_QUOTE: // just for testing
      return {
        ...state,
        quoteId: state.quoteId + action.payload,
      }
    default:
      return state
  }
}

// Action Creators
export function loadQuotes(quoteId) {
  return {
    type: LOAD_QUOTES,
    payload: quoteId,
  }
}

export function loadQuotesSuccess({ quotes, quoteId }) {
  const {
    payload: {
      previousIndex, selectedQuote, nextIndex, nextId, previousId,
    },
  } = getQuoteData({ quotes, quoteId })
  return {
    type: LOAD_QUOTES_SUCCESS,
    payload: {
      quoteId,
      selectedQuote,
      previousIndex,
      nextIndex,
      nextId,
      previousId,
      quotes,
    },
  }
}

export function navigateQuote(step) {
  return {
    type: NAVIGATE_QUOTE,
    payload: step,
  }
}

function getQuoteData({ quotes, quoteId }) {
  let selectedQuote
  let nextIndex
  let previousIndex
  let nextId
  let previousId
  quotes.forEach((quote, index) => {
    if (parseInt(quote.id, 10) === parseInt(quoteId, 10)) {
      const {
        sq,
        nix,
        pix,
        nid,
        pid,
      } = getNeighborQuotes({ quotes, index })
      selectedQuote = sq
      nextIndex = nix
      previousIndex = pix
      nextId = nid
      previousId = pid
    }
  })
  return {
    type: UPDATE_SELECTED_QUOTE,
    payload: {
      selectedQuote,
      previousIndex,
      nextIndex,
      nextId,
      previousId,
    },
  }
}

export function updateQuoteData({ quotes, index }) {
  const {
    sq,
    nix,
    pix,
    nid,
    pid,
  } = getNeighborQuotes({ quotes, index })
  return {
    type: UPDATE_SELECTED_QUOTE,
    payload: {
      selectedQuote: sq,
      previousIndex: pix,
      nextIndex: nix,
      previousId: pid,
      nextId: nid,
    },
  }
}

export function getNeighborQuotes({ quotes, index }) {
  let previousIndex
  let nextId
  let previousId
  let nextIndex
  if (index + 1 < quotes.length) {
    nextIndex = index + 1
    nextId = quotes[nextIndex].id
  }
  if (index !== 0) {
    previousIndex = index - 1
    previousId = quotes[previousIndex].id
  }
  return {
    sq: quotes[index],
    nix: nextIndex,
    pix: previousIndex,
    nid: nextId,
    pid: previousId,
  }
}

// Saga

// fetchQuote(id) {
//   axios.get(`api/quotes/${id}`)
//     .then((response) => {
//       this.setState({ quote: response.data })
//     })
//     .catch((error) => {
//       console.error(error)
//     })
// }

export function* loadQuotesTask({ payload: { quoteId } }) {
  const url = '/api/quotes'
  // invoke API call to load the patient data
  const result = yield call(callApi, url)
  if (result.success) {
    yield put(loadQuotesSuccess({ quotes: result.data, quoteId }))
  } else {
    // yield put(loadPatientDataFailed())
  }
}

/* quotes */

export function* quotesSaga() {
  yield takeLatest(LOAD_QUOTES, loadQuotesTask)
}
