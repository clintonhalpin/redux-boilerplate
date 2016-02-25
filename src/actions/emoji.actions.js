import api from './../util/api';

export const EMOJI_REQUEST = 'EMOJI_REQUEST';
export const EMOJI_SUCCESS = 'EMOJI_SUCCESS';
export const EMOJI_FAILURE = 'EMOJI_FAILURE';

// EMOJI

function recieveEmoji(json) {
  return {
    type: EMOJI_SUCCESS,
    data: json,
    receivedAt: Date.now()
  }
}

function fetchEmoji() {
  return dispatch => {
    return api.fetchEmojis() 
      .then(response => response.json())
      .then(json => dispatch(recieveEmoji(json)))
  }
}

export function fetchEmojiIfNeeded() {
  return (dispatch, getState) => {
    return dispatch(fetchEmoji());
  }
}