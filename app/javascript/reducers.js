import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import quotesReducer from 'bundles/quotes'

export default combineReducers({
  quotesReducer,
  form: formReducer,
})
