/* global describe, expect, it */
import {
  RECEIVE_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from '../constants/ActionTypes';
import reducer from '../reducer';

const initialState = {};

const postReact = {
  id: 1,
  title: 'React is Awesome',
  body: 'React and Redux is like Iron Man and Hulk',
  author: 'fjeansilva',
  category: 'react',
  voteScore: 3,
};

const postRedux = {
  id: 2,
  title: 'Redux is Great',
  body: 'React and Redux is like Iron Man and Hulk',
  author: 'fjeansilva',
  category: 'react',
  voteScore: 3,
};

const postJavaScript = {
  id: 3,
  title: 'I love you JavaScript',
  body: 'React and Redux is like Iron Man and Hulk',
  author: 'fjeansilva',
  category: 'react',
  voteScore: 1000000,
};

describe('Post reducer', () => {
  it('should return an initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle RECEIVE_POSTS', () => {
    const state = {};
    expect(reducer(state, { type: RECEIVE_POSTS, posts: [postReact, postRedux] }))
      .toEqual({
        ...state,
        1: postReact,
        2: postRedux,
      });
  });

  it('should handle ADD_POST', () => {
    const state = {
      [postReact.id]: postReact,
      [postRedux.id]: postRedux,
    };

    expect(reducer(state, { type: ADD_POST, post: postJavaScript }))
      .toEqual({
        1: postReact,
        2: postRedux,
        3: postJavaScript,
      });
  });

  it('should handle EDIT_POST', () => {
    const state = {
      [postReact.id]: postReact,
      [postRedux.id]: postRedux,
    };

    const editedPost = {
      id: 1,
      title: 'React is Awesome and Great',
      body: 'React and Redux is like Iron Man and Hulk',
      author: 'fjeansilva',
      category: 'react',
      voteScore: 3,
    };

    expect(reducer(state, { type: EDIT_POST, post: editedPost }))
      .toEqual({
        [postReact.id]: editedPost,
        [postRedux.id]: postRedux,
      });
  });

  it('should handle DELETE_POST', () => {
    const state = {
      [postReact.id]: postReact,
      [postRedux.id]: postRedux,
    };

    expect(reducer(state, { type: DELETE_POST, id: 1 }))
      .toEqual({
        [postRedux.id]: postRedux,
      });
  });
});
