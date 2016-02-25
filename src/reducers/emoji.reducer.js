import * as actionTypes from '../actions';

export default function emojis(state = {}, action) {
  switch (action.type) {
    case actionTypes.default.EMOJI_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case actionTypes.default.EMOJI_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: {...action.data}
      })
    default:
      return state
  }
}