// import _ from 'lodash'
//
// import ReactDOM from 'react-dom'


import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import QuotesDisplay from '../../../app/javascript/components/quotes/QuotesDisplay'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    loadQuotes: jest.fn(),
    quotes: [],
    quotesLoaded: true,
    selectedQuote: { text: "I'm a quote", author: 'Famous Lady' },
    history: {
      push: jest.fn(),
    },
    location: {
      search: jest.fn(),
    },
    updateQuoteData: jest.fn(),
    nextIndex: 2,
    previousIndex: 0,
    nextId: 3,
    previousId: 1,
    startingQuoteId: 2,
  }

  const enzymeWrapper = mount(<QuotesDisplay {...props} />)

  return {
    props,
    enzymeWrapper,
  }
}

describe('components', () => {
  describe('Quote', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()

      expect(enzymeWrapper.find('div').hasClass('')).toBe(true)

      expect(enzymeWrapper.find(QuotesDisplay).render().text()).toBe(" Previous ForwardI'm a quoteFamous Lady")
    })
  })
})
