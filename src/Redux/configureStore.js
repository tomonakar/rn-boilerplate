// @flow
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import auth from './modules/auth'
import nav from './modules/navigation'

const AppReducer = combineReducers({
  nav,
  auth
})

export default createStore(
  AppReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)
