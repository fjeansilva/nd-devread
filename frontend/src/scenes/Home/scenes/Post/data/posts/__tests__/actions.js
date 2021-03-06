
/* global describe, it, expect, jest */
import {
  START_REQUEST_POST,
  END_REQUEST_POST,
  THROW_ERROR_POST,
  RECEIVE_POSTS,
  ADD_POST,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST,
  SELECTED_POST,
  NOT_FOUND_POST,
} from '../constants/ActionTypes';

import * as actions from '../actions';
import * as api from '../api';

jest.mock('../api');

describe('Post actions', () => {
  it('startRequestPost should dispatch a START_REQUEST_POST action', () => {
    expect(actions.startRequestPost())
      .toEqual({
        type: START_REQUEST_POST,
      });
  });

  it('endRequestPost should dispatch a END_REQUEST_POST action', () => {
    expect(actions.endRequestPost())
      .toEqual({
        type: END_REQUEST_POST,
      });
  });

  it('throwErrorPost should dispatch a THROW_ERROR_POST action', () => {
    expect(actions.throwErrorPost())
      .toEqual({
        type: THROW_ERROR_POST,
      });
  });

  it('fetchPosts should dispatch a GET_POSTS action', async () => {
    const payload = {
      id: 1,
      title: 'React is Awesome',
      body: 'React and Redux is like Iron Man and Hulk',
      author: 'fjeansilva',
      category: 'react',
      timestamp: 1,
      deleted: 'false',
      voteScore: 3,
    };

    api.setMockPostRequest(Promise.resolve([payload, payload]));
    const dispatch = jest.fn();
    await actions.fetchPosts()(dispatch);
    expect(api.getPosts).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: START_REQUEST_POST }],
      [{ type: RECEIVE_POSTS, posts: [payload, payload] }],
      [{ type: END_REQUEST_POST }],
    ]);
  });

  it('fetchPostsByCategory should dispatch a RECEIVE_POSTS action', async () => {
    const postReact = {
      id: 1,
      title: 'React is Awesome',
      body: 'React and Redux is like Iron Man and Hulk',
      author: 'fjeansilva',
      category: 'react',
      timestamp: 1,
      deleted: 'false',
      voteScore: 3,
    };

    api.setMockPostRequest(Promise.resolve([postReact]));
    const dispatch = jest.fn();
    await actions.fetchPostsByCategory()(dispatch);
    expect(api.getPostsByCategory).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: START_REQUEST_POST }],
      [{ type: RECEIVE_POSTS, posts: [postReact] }],
      [{ type: END_REQUEST_POST }],
    ]);
  });

  it('fetchPostsByCategory should dispatch a THROW_ERROR_POST action', async () => {
    const error = 'error message';
    api.setMockPostRequest(Promise.resolve());

    const dispatch = jest.fn();
    await actions.fetchPostsByCategory('error')(dispatch);
    expect(api.getPostsByCategory).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: START_REQUEST_POST }],
      [{ type: THROW_ERROR_POST, error }],
    ]);
  });

  it('addPost should dispatch a ADD_POST action', async () => {
    const payload = {
      id: 1,
      title: 'React is Awesome',
      body: 'React and Redux is like Iron Man and Hulk',
      author: 'fjeansilva',
      category: 'react',
      voteScore: 0,
    };

    api.setMockPostRequest(Promise.resolve(payload));

    const dispatch = jest.fn();
    await actions.addPost()(dispatch);
    expect(api.addPost).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: ADD_POST, post: payload }],
    ]);
  });

  it('votePost should dispatch a VOTE_POST action', async () => {
    const payload = {
      id: 1,
      title: 'React is Awesome',
      body: 'React and Redux is like Iron Man and Hulk',
      author: 'fjeansilva',
      category: 'react',
      voteScore: 3,
    };

    api.setMockPostRequest(Promise.resolve(payload));

    const dispatch = jest.fn();
    await actions.votePost(1, 'upVote')(dispatch);
    expect(api.votePost).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: VOTE_POST, post: payload }],
    ]);
  });

  it('votePost should dispatch a THROW_ERROR_POST action', async () => {
    const error = 'error message';
    api.setMockPostRequest(Promise.resolve());

    const dispatch = jest.fn();
    await actions.votePost('error')(dispatch);
    expect(api.votePost).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: THROW_ERROR_POST, error }],
    ]);
  });

  it('editPost should dispatch a EDIT_POST action', async () => {
    const payload = {
      id: 1,
      title: 'React is Awesome',
      body: 'React and Redux is like Iron Man and Hulk',
      author: 'fjeansilva',
      category: 'react',
      voteScore: 3,
    };

    api.setMockPostRequest(Promise.resolve(payload));

    const dispatch = jest.fn();
    await actions.editPost(1, 'Title React', 'TDD with Redux is awesome!')(dispatch);
    expect(api.editPost).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: EDIT_POST, post: payload }],
    ]);
  });

  it('editPost should dispatch a THROW_ERROR_POST action', async () => {
    const error = 'error message';
    api.setMockPostRequest(Promise.resolve());

    const dispatch = jest.fn();
    await actions.editPost('error')(dispatch);
    expect(api.editPost).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: THROW_ERROR_POST, error }],
    ]);
  });

  it('fetchPost should dispatch a SELECTED_POST action', async () => {
    const payload = {
      id: 1,
      title: 'React is Awesome',
      body: 'React and Redux is like Iron Man and Hulk',
      author: 'fjeansilva',
      category: 'react',
      voteScore: 3,
    };

    api.setMockPostRequest(Promise.resolve(payload));

    const dispatch = jest.fn();
    await actions.fetchPost(1)(dispatch);
    expect(api.getPost).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: START_REQUEST_POST }],
      [{ type: SELECTED_POST, post: payload }],
      [{ type: END_REQUEST_POST }],
    ]);
  });

  it('fetchPost should dispatch a THROW_ERROR_POST action', async () => {
    const error = 'error message';
    api.setMockPostRequest(Promise.resolve());

    const dispatch = jest.fn();
    await actions.fetchPost('error')(dispatch);
    expect(api.getPost).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: START_REQUEST_POST }],
      [{ type: THROW_ERROR_POST, error }],
    ]);
  });

  it('fetchPost should dispatch a NOT_FOUND_POST action', async () => {
    api.setMockPostRequest(Promise.resolve({}));

    const dispatch = jest.fn();
    await actions.fetchPost(1)(dispatch);
    expect(api.getPost).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: START_REQUEST_POST }],
      [{ type: NOT_FOUND_POST }],
      [{ type: END_REQUEST_POST }],
    ]);
  });

  it('fetchPost should dispatch a THROW_ERROR_POST action', async () => {
    const error = 'error message';
    api.setMockPostRequest(Promise.resolve());

    const dispatch = jest.fn();
    await actions.fetchPost('error')(dispatch);
    expect(api.getPost).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: START_REQUEST_POST }],
      [{ type: THROW_ERROR_POST, error }],
    ]);
  });

  it('deletePost should dispatch a DELETE_POST action', async () => {
    const payload = {
      id: 1,
      title: 'React is Awesome',
      body: 'React and Redux is like Iron Man and Hulk',
      author: 'fjeansilva',
      category: 'react',
      voteScore: 3,
    };

    api.setMockPostRequest(Promise.resolve(payload));

    const dispatch = jest.fn();
    await actions.deletePost(1)(dispatch);
    expect(api.deletePost).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: DELETE_POST, id: payload.id }],
    ]);
  });

  it('deletePost should dispatch a THROW_ERROR_POST action', async () => {
    const error = 'error message';
    api.setMockPostRequest(Promise.resolve());

    const dispatch = jest.fn();
    await actions.deletePost('error')(dispatch);
    expect(api.deletePost).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: THROW_ERROR_POST, error }],
    ]);
  });
});
