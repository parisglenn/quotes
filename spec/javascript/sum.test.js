// import _ from 'lodash'
//
// // import React from 'react'
// import ReactDOM from 'react-dom'

test('1 + 1 equals 2', () => {
  expect(1 + 1).toBe(2)
})

// describe('components', () => {
//   describe('Quote', () => {
//     // it('should call addTodo if length of text is greater than 0', () => {
//     //   const { enzymeWrapper, props } = setup()
//     //   const input = enzymeWrapper.find('TodoTextInput')
//     //   input.props().onSave('')
//     //   expect(props.addTodo.mock.calls.length).toBe(0)
//     //   input.props().onSave('Use Redux')
//     //   expect(props.addTodo.mock.calls.length).toBe(1)
//     // })
//   })
// })


// const propTypes = {
//   loadQuotes: PropTypes.func.isRequired,
//   quotes: PropTypes.isArray,
//   quotesLoaded: PropTypes.bool,
//   selectedQuote: PropTypes.shape(),
//   history: PropTypes.shape({
//     push: PropTypes.func,
//   }).isRequired,
//   location: PropTypes.shape({
//     search: PropTypes.func,
//   }).isRequired,
//   updateQuoteData: PropTypes.func.isRequired,
//   nextIndex: PropTypes.number,
//   previousIndex: PropTypes.number,
//   nextId: PropTypes.number,
//   previousId: PropTypes.number,
//   startingQuoteId: PropTypes.number.isRequired,
// }

// import * as actions from '../../actions/TodoActions'
// import * as types from '../../app/javascript/components/quotes/QuotesDisplay'
// import React from 'react'
// import Enzyme, { mount } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16';
// import Header from '../../components/Header'
//
// Enzyme.configure({ adapter: new Adapter() });

// function setup() {
//   const props = {
//     addTodo: jest.fn()
//   }

//   const enzymeWrapper = mount(<Header {...props} />)

//   return {
//     props,
//     enzymeWrapper
//   }
// }

// describe('components', () => {
//   describe('Header', () => {
//     it('should render self and subcomponents', () => {
//       const { enzymeWrapper } = setup()

//       expect(enzymeWrapper.find('header').hasClass('header')).toBe(true)

//       expect(enzymeWrapper.find('h1').text()).toBe('todos')

//       const todoInputProps = enzymeWrapper.find('TodoTextInput').props()
//       expect(todoInputProps.newTodo).toBe(true)
//       expect(todoInputProps.placeholder).toEqual('What needs to be done?')
//     })

//     it('should call addTodo if length of text is greater than 0', () => {
//       const { enzymeWrapper, props } = setup()
//       const input = enzymeWrapper.find('TodoTextInput')
//       input.props().onSave('')
//       expect(props.addTodo.mock.calls.length).toBe(0)
//       input.props().onSave('Use Redux')
//       expect(props.addTodo.mock.calls.length).toBe(1)
//     })
//   })
// })
