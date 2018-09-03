import React from 'react'
// import { Link } from 'react-router-dom'
import queryString from 'query-string'
// import axios from 'axios'
import PropTypes from 'prop-types'

class QuotesDisplay extends React.Component {
  static propTypes = {
    loadQuotes: PropTypes.func.isRequired,
    quotes: PropTypes.arrayOf(PropTypes.shape({})),
    quotesLoaded: PropTypes.bool,
    selectedQuote: PropTypes.shape(),
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.func,
    }).isRequired,
    updateQuoteData: PropTypes.func.isRequired,
    nextIndex: PropTypes.number,
    previousIndex: PropTypes.number,
    nextId: PropTypes.number,
    previousId: PropTypes.number,
    startingQuoteId: PropTypes.number.isRequired,
  }

  static defaultProps = {
    quotes: [],
    quotesLoaded: false,
    selectedQuote: {},
    nextIndex: null,
    previousIndex: null,
    nextId: null,
    previousId: null,
  }

  constructor(props) {
    super(props)
    // this.state = {
    //   quote: {},
    // }
    this.navQuoteForward = this.navQuoteForward.bind(this)
    this.navQuoteBack = this.navQuoteBack.bind(this)
  }

  componentDidMount() {
    this.setQuoteIdFromQueryString(this.props.location.search)
    this.props.loadQuotes({ quoteId: this.quoteId })
    // this.fetchQuote(this.quoteId)
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setQuoteIdFromQueryString(nextProps.location.search)
  //   this.fetchQuote(this.quoteId)
  // }

  setQuoteIdFromQueryString(qs) {
    this.qsParams = queryString.parse(qs)
    if (this.qsParams.quote) {
      // assign quote ID from the URL's query string
      this.quoteId = Number(this.qsParams.quote)
    } else {
      this.quoteId = this.props.startingQuoteId
      // update URL in browser to reflect current quote in query string
      this.props.history.push(`/?quote=${this.quoteId}`)
    }
  }

  navQuoteForward() {
    const {
      updateQuoteData,
      nextIndex,
      quotes,
      nextId,
    } = this.props
    updateQuoteData({ quotes, index: nextIndex })
    this.props.history.push(`/?quote=${nextId}`)
  }

  navQuoteBack() {
    const {
      updateQuoteData,
      previousIndex,
      quotes,
      previousId,
    } = this.props
    updateQuoteData({ quotes, index: previousIndex })
    this.props.history.push(`/?quote=${previousId}`)
  }

  renderPrevious() {
    const { previousIndex } = this.props
    if (previousIndex !== undefined && previousIndex !== null) {
      return (
        <button onClick={this.navQuoteBack}> Previous</button>
      )
    }
    return null
  }

  renderNext() {
    const { nextIndex } = this.props
    if (nextIndex !== undefined && nextIndex !== null) {
      return (
        <button onClick={this.navQuoteForward}> Forward</button>
      )
    }
    return null
  }

  render() {
    const { quotesLoaded, selectedQuote } = this.props
    // const { quote } = this.state
    // const nextQuoteId = quote.next_id
    // const previousQuoteId = quote.previous_id

    if (!quotesLoaded) {
      return null
    }
    return (
      <div>
        {this.renderPrevious()}
        {this.renderNext()}
        <p>{selectedQuote.text}</p>
        <p>{selectedQuote.author}</p>
      </div>
    )
  }
}

export default QuotesDisplay
