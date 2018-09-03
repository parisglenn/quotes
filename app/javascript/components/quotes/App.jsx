import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import QuotesContainer from 'containers/QuotesContainer'

const App = props => (
  <Router startingQuoteId={props.startingQuoteId}>
    <div>
      <Route
        path="/"
        startingQuoteId={props.startingQuoteId}
        render={routeProps => <QuotesContainer {...props} {...routeProps} />}
      />
    </div>
  </Router>
)

export default App
