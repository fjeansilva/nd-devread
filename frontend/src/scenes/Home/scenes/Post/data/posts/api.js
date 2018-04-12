/* global localStorage  */
import fetch from 'cross-fetch';
import uuidv1 from 'uuid/v1';

const api = 'http://localhost:3001';

let { token } = localStorage;

if (!token) {
  const tokenRandom = Math.random().toString(36).sub(-8);
  localStorage.token = tokenRandom;
  token = tokenRandom;
}

const headers = {
  Authorization: token,
  'Content-Type': 'application/json',
};

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);

export const addPost = (post) => {
  const defaultValues = {
    id: uuidv1(),
    deleted: false,
    timestamp: Date.now(),
    voteScore: 0,
  };

  const postItem = Object.assign(defaultValues, post);
  return fetch(`${api}/posts`, { method: 'post', headers, body: JSON.stringify(postItem) })
    .then(data => data.json());
};

export const getPost = id =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);

export const votePost = (id, vote) => {
  const params = {
    method: 'post',
    headers,
    body: JSON.stringify({ option: vote }),
  };

  return fetch(`${api}/posts/${id}`, params)
    .then(data => data.json())
    .then(data => data);
};

export const editPost = (id, title, body) => {
  const post = {
    title,
    body,
  };

  const params = {
    method: 'put',
    headers,
    body: JSON.stringify(post),
  };

  return fetch(`${api}/posts/${id}`, params)
    .then(data => data.json())
    .then(data => data);
};

export const deletePost = (id) => {
  const post = {
    deleted: true,
  };

  const params = {
    method: 'put',
    headers,
    body: JSON.stringify(post),
  };

  return fetch(`${api}/posts/${id}`, params)
    .then(data => data.json())
    .then(data => data);
};
