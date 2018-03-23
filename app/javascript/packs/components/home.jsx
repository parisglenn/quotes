import React from 'react'
import PropTypes from 'prop-types'

const Home = props => (
  <div>Welcome to {props.name}, the best way to manage recipes.</div>
)

Home.defaultProps = {
  name: 'Recipes'
}

Home.propTypes = {
  name: PropTypes.string
}

export default Home
