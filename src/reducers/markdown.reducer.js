import * as actionTypes from '../actions';

console.log(actionTypes)

export default function markdown(state = {}, action) {
  switch (action.type) {
    case actionTypes.default.MARKDOWN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        data: false
      })
    case actionTypes.default.MARKDOWN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      })
    default:
      return state
  }
}