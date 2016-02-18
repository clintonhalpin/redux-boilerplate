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
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(json => dispatch(recieveUser(json)))
  }
}

export function fetchUserIfNeeded(username) {
  return (dispatch, getState) => {
    return dispatch(fetchUser(username));
  }
}