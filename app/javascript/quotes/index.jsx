/* global document */

import React from 'react'
import ReactDOM from 'react-dom'
// import App from './components/App'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import rootReducer from 'reducers'
import rootSaga from 'saga'
import configureStore from 'store'

import App from '../components/quotes/App' // update this

require('react-hot-loader/patch')
require('babel-polyfill')


const quotes = document.querySelector('#quotes')

const myStore = {}

const store = configureStore(rootReducer, rootSaga, myStore)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App startingQuoteId={quotes.dataset.startingQuoteId} />
      </Provider>
    </AppContainer>,
    quotes,
  )
}

// ReactDOM.render(<AppContainer />, quotes)


render(App) // update this

if (module.hot) {
  module.hot.accept('../quotes/components/App', () => { render(App) })
}


// require("react-hot-loader/patch")
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { AppContainer } from 'react-hot-loader'
//
// import Root from './containers/Root'
//
// const render = Component => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('root')
//   )
// }
//
// render(Root)
//
// if (module.hot) {
//   module.hot.accept('./containers/Root', () => { render(Root) })
// }
