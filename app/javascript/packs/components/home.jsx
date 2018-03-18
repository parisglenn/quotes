// import React, { PropTypes, Component } from 'react'
//
// export default class Hello extends Component {
//
//   render() {
//     return (
//       <div>hi</div>
//     )
//   }
// }
//
// import React, { PropTypes } from 'react'
// import FlatButton from './FlatButton'
//
// const CancelButton = props => (
//   <FlatButton
//     handleClick={props.handleClick}
//     label={props.label}
//     id={props.id}
//     style={props.customStyle}
//     buttonStyle={props.customStyle}
//   />
// )
//
// CancelButton.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   id: PropTypes.string,
//   customStyle: PropTypes.shape({}),
//   label: PropTypes.string,
// }
//
// CancelButton.defaultProps = {
//   id: null,
//   customStyle: {},
//   label: 'CANCEL',
// }
// export default CancelButton

// import React from 'react'
// import { render } from 'react-dom'
// import PropTypes from 'prop-types'
// // import { hot } from 'react-hot-loader'
//
// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )
//
// Hello.defaultProps = {
//   name: 'David'
// }
//
// Hello.propTypes = {
//   name: PropTypes.string
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//   render(
//     <Hello name="Recipes??" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
//
// export default Hello


// module.hot.accept('./hello_react.js', () => {
//   const NextRootContainer = require('./hello_react.jsx').default;
//   render(<NextRootContainer />, document.getElementById('react-root'));
// })
