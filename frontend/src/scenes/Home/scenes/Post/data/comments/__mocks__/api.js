/* global jest */
let commentResponse;
export const setMockCommentRequest = (response) => {
  commentResponse = response;
};

export const getComments = jest.fn(() => commentResponse);

export const getComment = jest.fn(() => commentResponse);

export const addComment = jest.fn(() => commentResponse);

export const voteComment = jest.fn(() => commentResponse);

export const editComment = jest.fn(() => commentResponse);

export const deleteComment = jest.fn(() => commentResponse);
