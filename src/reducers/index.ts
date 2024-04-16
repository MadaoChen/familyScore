import { combineReducers } from 'redux'
import counter from './counter'
import tabIndex from './tabIndex'

export default combineReducers({
  counter,
  tabIndex
})