/* global localStorage  */
import fetch from 'cross-fetch';

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

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);
