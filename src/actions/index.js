import api from './../util/api';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

function recieveUser(json) {
  return {
    type: USER_SUCCESS,
    data: json,
    receivedAt: Date.now()
  }
}

function fetchUser(username) {
  return dispatch => {
    return api.fetchUser(username) 
      .then(response => response.json())
      .then(json => dispatch(recieveUser(json)))
  }
}

export function fetchUserIfNeeded(username) {
  return (dispatch, getState) => {
    return dispatch(fetchUser(username));
  }
}

// EMOJI

export const EMOJI_REQUEST = 'EMOJI_REQUEST';
export const EMOJI_SUCCESS = 'EMOJI_SUCCESS';
export const EMOJI_FAILURE = 'EMOJI_FAILURE';

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
