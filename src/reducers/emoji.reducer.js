import * as actionTypes from '../actions';

export default function emojis(state = {}, action) {
  switch (action.type) {
    case actionTypes.EMOJI_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case actionTypes.EMOJI_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        ...action.data
      })
    default:
      return state
  }
}