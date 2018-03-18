// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Root from './containers/Root'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  console.log("module is hot")
  module.hot.accept('./containers/Root', () => { render(Root) })
}

// import React from 'react'
// import ReactDOM from 'react-dom'
// import Hello from './components/home.jsx'
// // import PropTypes from 'prop-types'
// // import { hot } from 'react-hot-loader'
// //
// // const Hello = props => (
// //   <div>Hello {props.name}!</div>
// // )
// //
// // Hello.defaultProps = {
// //   name: 'David'
// // }
// //
// // Hello.propTypes = {
// //   name: PropTypes.string
// // }
// //
// // document.addEventListener('DOMContentLoaded', () => {
// //   ReactDOM.render(
// //     <Hello name="Recipes" />,
// //     document.body.appendChild(document.createElement('div')),
// //   )
// // })
//
// module.hot.accept('./hello_react.js', () => {
//   // const NextRootContainer = require('./hello_react.jsx').default;
//   const NextRootContainer = require('./components/home.jsx').default;
//   render(<NextRootContainer />, document.getElementById('react-root'));
// })
// // export default hot(module)(Hello)
