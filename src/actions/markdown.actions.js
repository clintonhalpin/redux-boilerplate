import api from './../util/api';

export const MARKDOWN_POST = 'MARKDOWN_POST';
export const MARKDOWN_SUCCESS = 'MARKDOWN_SUCCESS';
export const MARKDOWN_FAILURE = 'MARKDOWN_FAILURE';

// EMOJI

function recieveMarkdown(html) {
  return {
    type: MARKDOWN_SUCCESS,
    data: html,
    receivedAt: Date.now()
  }
}

function markdownPending() {
  return {
    type: MARKDOWN_POST
  }
}

function post(req) {
  return dispatch => {
    dispatch(markdownPending())
    return api.postMarkdown(req) 
      .then(res => res.text())
      .then(html => { 
        dispatch(recieveMarkdown(html))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function postMarkdown(req) {
  return (dispatch, getState) => {
    return dispatch(post(req));
  }
}