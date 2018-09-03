import reducer from '../../../app/javascript/bundles/quotes'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      quotes: [],
      quotesLoaded: false,
      selectedQuote: {},
      quoteId: null,
      previousIndex: null,
      nextIndex: null,
    })
  })

  it('should handle ADD_TODO', () => {
    expect(reducer({ quoteId: 1 }, {
      type: 'quotes/navigateQuote',
      payload: 1,
    })).toEqual({
      quoteId: 2,
    })
  })
})
