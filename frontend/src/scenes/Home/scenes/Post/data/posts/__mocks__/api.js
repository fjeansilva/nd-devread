/* global jest */
let postResponse;
export const setMockPostRequest = (response) => {
  postResponse = response;
};

function handleResponse(type) {
  if (type === 'error') {
    return Promise.reject(new Error('error message').message);
  }

  return postResponse;
}

export const getPosts = jest.fn(handleResponse);

export const getPostsByCategory = jest.fn(handleResponse);

export const getPost = jest.fn(handleResponse);

export const addPost = jest.fn(handleResponse);

export const votePost = jest.fn(handleResponse);

export const editPost = jest.fn(handleResponse);

export const deletePost = jest.fn(handleResponse);
