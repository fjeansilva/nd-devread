/* global jest */
let postResponse;
export const setMockPostRequest = (response) => {
  postResponse = response;
};

export const getPosts = jest.fn(() => postResponse);

export const getPost = jest.fn(() => postResponse);

export const addPost = jest.fn(() => postResponse);

export const votePost = jest.fn(() => postResponse);

export const editPost = jest.fn(() => postResponse);
