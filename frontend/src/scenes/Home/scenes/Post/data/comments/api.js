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

export const getComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);

export const voteComment = (id, option) => {
  const params = {
    method: 'post',
    headers,
    body: JSON.stringify({ option }),
  };

  return fetch(`${api}/comments/${id}`, params)
    .then(data => data.json())
    .then(data => data);
};

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

export const addComment = (comment) => {
  const defaultValues = {
    id: uuidv1(),
    deleted: false,
    timestamp: Date.now(),
    voteScore: 0,
  };

  const commentItem = Object.assign(defaultValues, comment);
  return fetch(`${api}/comments`, { method: 'post', headers, body: JSON.stringify(commentItem) })
    .then(data => data.json());
};

export const editComment = (id, body) => {
  const comment = {
    body,
    timestamp: Date.now(),
  };

  const params = {
    method: 'put',
    headers,
    body: JSON.stringify(comment),
  };

  return fetch(`${api}/comments/${id}`, params)
    .then(data => data.json())
    .then(data => data);
};

export const getComment = id =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);

export const deleteComment = (id) => {
  const params = {
    method: 'delete',
    headers,
  };

  return fetch(`${api}/comments/${id}`, params)
    .then(data => data.json())
    .then(data => data);
};
