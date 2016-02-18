import * as actionTypes from '../actions';

export default function user(state = {}, action) {
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