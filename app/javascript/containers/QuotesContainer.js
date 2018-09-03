import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import QuotesDisplay from 'components/quotes/QuotesDisplay'

import { loadQuotes, loadQuotesSuccess, updateQuoteData } from 'bundles/quotes'

export default withRouter(connect(
  state => ({
    quotes: state.quotesReducer.quotes,
    selectedQuote: state.quotesReducer.selectedQuote,
    quotesLoaded: state.quotesReducer.quotesLoaded,
    previousIndex: state.quotesReducer.previousIndex,
    nextIndex: state.quotesReducer.nextIndex,
    nextId: state.quotesReducer.nextId,
    previousId: state.quotesReducer.previousId,
  }),
  {
    loadQuotes,
    loadQuotesSuccess,
    updateQuoteData,
  },
)(QuotesDisplay))
