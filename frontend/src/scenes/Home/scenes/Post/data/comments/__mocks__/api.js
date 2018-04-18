/* global jest */
let commentResponse;
export const setMockCommentRequest = (response) => {
  commentResponse = response;
};

function handleResponse(type) {
  if (type === 'error') {
    return Promise.reject(new Error('error message').message);
  }

  return commentResponse;
}

export const getComments = jest.fn(handleResponse);

export const getComment = jest.fn(handleResponse);

export const addComment = jest.fn(handleResponse);

export const voteComment = jest.fn(handleResponse);

export const editComment = jest.fn(handleResponse);

export const deleteComment = jest.fn(handleResponse);
