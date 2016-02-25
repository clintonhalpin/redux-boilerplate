import * as actionTypes from '../actions';

export default function user(state = {}, action) {
  switch (action.type) {
    case actionTypes.default.USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        data: false
      })
    case actionTypes.default.USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: {
          ...action.data
        }
      })
    default:
      return state
  }
}