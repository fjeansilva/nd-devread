
/* global describe, it, expect, jest */
import {
  START_REQUEST_POST,
  END_REQUEST_POST,
  THROW_ERROR_POST,
  RECEIVE_POSTS,
  ADD_POST,
  SELECTED_POST,
  VOTE_POST,
  EDIT_POST,
  DELETE_POST,
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

  // TODO: MOVE TO PARENT TEST
  // it('fetchPost should dispatch a SELECTED_POST action', async () => {
  //   const payload = {
  //     id: 1,
  //     title: 'React is Awesome',
  //     body: 'React and Redux is like Iron Man and Hulk',
  //     author: 'fjeansilva',
  //     category: 'react',
  //     voteScore: 3,
  //   };

  //   api.setMockPostRequest(Promise.resolve(payload));

  //   const dispatch = jest.fn();
  //   await actions.fetchPost(1)(dispatch);
  //   expect(api.getPost).toHaveBeenCalled();
  //   expect(dispatch.mock.calls).toEqual([
  //     [{ type: START_REQUEST_POST }],
  //     [{ type: SELECTED_POST, post: payload }],
  //     [{ type: END_REQUEST_POST }],
  //   ]);
  // });

  it('votePost should dispatch a VOTE_POST action', async () => {
    const payload = {
      id: 1,
      title: 'React is Awesome',
      body: 'React and Redux is like Iron Man and Hulk',
      author: 'fjeansilva',
      category: 'react',
      voteScore: 3,
    };

    api.setMockPostRequest(Promise.resolve({
      post: payload,
    }));

    const dispatch = jest.fn();
    await actions.votePost(1, 'upVote')(dispatch);
    expect(api.votePost).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: VOTE_POST, post: payload }],
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
});
