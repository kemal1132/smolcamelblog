import { combineReducers } from 'redux'
import * as types from '../types'

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1
    case types.DECREMENT:
      return state - 1
    case types.RESET:
      return 0
    default:
      return state
  }
}



// TIMER REDUCER
const timerReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return state+1
    case types.TIMER_RESET:
      return state=0
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
}

export default combineReducers(reducers);