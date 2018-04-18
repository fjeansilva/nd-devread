import {
  ADD_POST,
  START_REQUEST_POST,
  END_REQUEST_POST,
  THROW_ERROR_POST,
  RECEIVE_POSTS,
  SELECTED_POST,
  EDIT_POST,
  DELETE_POST,
  RESET_POST,
  VOTE_POST,
  NOT_FOUND_POST,
} from './constants/ActionTypes';
import * as api from './api';

export const startRequestPost = () => ({ type: START_REQUEST_POST });
export const endRequestPost = () => ({ type: END_REQUEST_POST });
export const throwErrorPost = error => ({ type: THROW_ERROR_POST, error });

export const addPost = data => (dispatch) => {
  api.addPost(data)
    .then(post => dispatch({ type: ADD_POST, post }))
    .then(() => dispatch(endRequestPost()))
    .catch(error => dispatch(throwErrorPost(error)));
};

export const fetchPosts = () => async (dispatch) => {
  dispatch(startRequestPost());
  await api.getPosts()
    .then((data) => {
      dispatch({ type: RECEIVE_POSTS, posts: data });
    })
    .then(() => dispatch(endRequestPost()))
    .catch(error => dispatch(throwErrorPost(error)));
};

export const fetchPostsByCategory = category => async (dispatch) => {
  dispatch(startRequestPost());
  await api.getPostsByCategory(category)
    .then((data) => {
      dispatch({ type: RECEIVE_POSTS, posts: data });
    })
    .then(() => dispatch(endRequestPost()))
    .catch(error => dispatch(throwErrorPost(error)));
};

export const fetchPost = id => async (dispatch) => {
  dispatch(startRequestPost());
  await api.getPost(id)
    .then((post) => {
      if (post.id) {
        dispatch({ type: SELECTED_POST, post });
      } else {
        dispatch({ type: NOT_FOUND_POST });
      }
    })
    .then(() => dispatch(endRequestPost()))
    .catch(error => dispatch(throwErrorPost(error)));
};

export const votePost = (id, option) => async (dispatch) => {
  await api.votePost(id, option)
    .then(post => dispatch({ type: VOTE_POST, post }))
    .catch(error => dispatch(throwErrorPost(error)));
};

export const editPost = (id, title, body) => async (dispatch) => {
  await api.editPost(id, title, body)
    .then(post => dispatch({ type: EDIT_POST, post }))
    .catch(error => dispatch(throwErrorPost(error)));
};

export const deletePost = id => async (dispatch) => {
  await api.deletePost(id)
    .then((post) => {
      dispatch({ type: DELETE_POST, id: post.id });
    })
    .catch(error => dispatch(throwErrorPost(error)));
};

export const resetPost = () => dispatch => dispatch({ type: RESET_POST });
