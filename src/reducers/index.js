import * as actionTypes from '../actions'
import merge from 'lodash/merge'
import { routeReducer } from 'react-router-redux'
import { combineReducers } from 'redux'


function user(state = {}, action) {
  switch (action.type) {
    case actionTypes.USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case actionTypes.USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        ...action.data
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user,
  routing: routeReducer
})


export default rootReducer
