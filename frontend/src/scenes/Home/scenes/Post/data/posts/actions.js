import {
  ADD_POST,
  START_REQUEST_POST,
  END_REQUEST_POST,
  THROW_ERROR_POST,
  RECEIVE_POSTS,
  SELECTED_POST,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST,
} from './constants/ActionTypes';
import * as api from './api';

export const startRequestPost = () => ({ type: START_REQUEST_POST });
export const endRequestPost = () => ({ type: END_REQUEST_POST });
export const throwErrorPost = error => ({ type: THROW_ERROR_POST, error });

export const addPost = data => async (dispatch) => {
  try {
    await api.addPost(data)
      .then((result) => {
        const { post } = result;
        dispatch({ type: ADD_POST, post });
      });
  } catch (error) {
    dispatch(throwErrorPost(error));
  }
};

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(startRequestPost());
    await api.getPosts()
      .then((data) => {
        dispatch({ type: RECEIVE_POSTS, posts: data });
      });
  } catch (error) {
    dispatch(throwErrorPost(error));
  } finally {
    dispatch(endRequestPost());
  }
};

export const fetchPost = id => async (dispatch) => {
  try {
    dispatch(startRequestPost());
    await api.getPost(id)
      .then((data) => {
        const { post } = data;
        dispatch({ type: SELECTED_POST, post });
      });
  } catch (error) {
    dispatch(throwErrorPost(error));
  } finally {
    dispatch(endRequestPost());
  }
};

export const votePost = (id, vote) => async (dispatch) => {
  try {
    api.votePost(id, vote)
      .then(({ post }) => dispatch({ type: VOTE_POST, post }));
  } catch (error) {
    dispatch(throwErrorPost(error));
  }
};

export const editPost = (id, title, body) => async (dispatch) => {
  try {
    await api.editPost(id, title, body)
      .then(({ post }) => dispatch({ type: EDIT_POST, post }));
  } catch (error) {
    dispatch(throwErrorPost(error));
  }
};

export const deletePost = id => (dispatch) => {
  try {
    api.deletePost(id)
      .then(({ post }) => dispatch({ type: DELETE_POST, id: post.id }));
  } catch (error) {
    dispatch(throwErrorPost(error));
  }
};
