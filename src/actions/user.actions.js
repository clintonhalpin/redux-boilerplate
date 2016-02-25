import api from './../util/api';
import makeAction from './../util/makeAction';

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

function requestUser() {
  return {
    type: USER_REQUEST
  }
}

function fetchUser(username) {
  return dispatch => {
    dispatch(requestUser())
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