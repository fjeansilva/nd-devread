/* global describe, it, expect, jest */
import {
  RECEIVE_COMMENTS,
  GET_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  VOTE_COMMENT,
  DELETE_COMMENT,
  THROW_ERROR_COMMENT,
  CLEAR_COMMENT_SELECTED,
} from '../constants/ActionTypes';

import * as api from '../api';
import * as actions from '../actions';

jest.mock('../api');

const firstComment = {
  id: 1,
  parentId: 1,
  timestamp: Date.now(),
  body: 'comment Body',
  author: 'fjeansilva',
  voteScore: 1,
  deleted: false,
  parentDeleted: false,
};

const secondComment = {
  id: 2,
  parentId: 1,
  timestamp: Date.now(),
  body: 'comment Body',
  author: 'fjeansilva',
  voteScore: 1,
  deleted: false,
  parentDeleted: false,
};

describe('Comments actions', () => {
  it('fetchComments should dispatch a RECEIVE_COMMENTS', async () => {
    api.setMockCommentRequest(Promise.resolve([firstComment, secondComment]));
    const postId = 1;
    const dispatch = jest.fn();
    await actions.fetchComments(postId)(dispatch);
    expect(api.getComments).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: RECEIVE_COMMENTS, comments: [firstComment, secondComment] }],
    ]);
  });

  it('fetchComments should dispatch a THROW_ERROR_COMMENT', async () => {
    const error = 'error message';
    api.setMockCommentRequest(Promise.resolve());
    const dispatch = jest.fn();
    await actions.fetchComments('error')(dispatch);
    expect(api.getComments).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: THROW_ERROR_COMMENT, error }],
    ]);
  });

  it('voteComment should dispatch a VOTE_COMMENT', async () => {
    api.setMockCommentRequest(Promise.resolve(firstComment));
    const dispatch = jest.fn();
    const commentId = 1;
    await actions.voteComment(commentId, 'upVote')(dispatch);
    expect(api.voteComment).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: VOTE_COMMENT, comment: firstComment }],
    ]);
  });

  it('voteComment should dispatch a THROW_ERROR_COMMENT', async () => {
    const error = 'error message';
    api.setMockCommentRequest(Promise.resolve());
    const dispatch = jest.fn();
    await actions.voteComment('error', 1)(dispatch);
    expect(api.voteComment).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: THROW_ERROR_COMMENT, error }],
    ]);
  });

  it('addComment should dispatch a ADD_COMMENT', async () => {
    api.setMockCommentRequest(Promise.resolve(firstComment));
    const dispatch = jest.fn();
    await actions.addComment()(dispatch);
    expect(api.addComment).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: ADD_COMMENT, comment: firstComment }],
    ]);
  });

  it('addComment should dispatch a THROW_ERROR_COMMENT', async () => {
    const error = 'error message';
    api.setMockCommentRequest(Promise.resolve());
    const dispatch = jest.fn();
    await actions.addComment('error')(dispatch);
    expect(api.addComment).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: THROW_ERROR_COMMENT, error }],
    ]);
  });

  it('editComment should dispatch a EDIT_COMMENT', async () => {
    const updatedComment = {
      id: 1,
      parentId: 1,
      timestamp: Date.now(),
      body: 'EDITED BODY COMMENT',
      author: 'fjeansilva',
      voteScore: 1,
      deleted: false,
      parentDeleted: false,
    };

    api.setMockCommentRequest(Promise.resolve(updatedComment));
    const dispatch = jest.fn();
    await actions.editComment()(dispatch);
    expect(api.editComment).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: EDIT_COMMENT, comment: updatedComment }],
      [{ type: CLEAR_COMMENT_SELECTED }],
    ]);
  });

  it('editComment should dispatch a THROW_ERROR_COMMENT', async () => {
    const error = 'error message';
    api.setMockCommentRequest(Promise.resolve());
    const dispatch = jest.fn();
    await actions.editComment('error')(dispatch);
    expect(api.editComment).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: THROW_ERROR_COMMENT, error }],
    ]);
  });

  it('getComment should dispatch a GET_COMMENT', async () => {
    api.setMockCommentRequest(Promise.resolve(firstComment));
    const dispatch = jest.fn();
    await actions.getComment()(dispatch);
    expect(api.getComment).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: GET_COMMENT, comment: firstComment }],
    ]);
  });

  it('getComment should dispatch a THROW_ERROR_COMMENT', async () => {
    const error = 'error message';
    api.setMockCommentRequest(Promise.resolve());
    const dispatch = jest.fn();
    await actions.getComment('error')(dispatch);
    expect(api.getComment).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: THROW_ERROR_COMMENT, error }],
    ]);
  });

  it('deleteComment should dispatch a DELETE_COMMENT', async () => {
    api.setMockCommentRequest(Promise.resolve(firstComment));
    const dispatch = jest.fn();
    await actions.deleteComment()(dispatch);
    expect(api.deleteComment).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: DELETE_COMMENT, comment: firstComment }],
    ]);
  });

  it('deleteComment should dispatch a THROW_ERROR_COMMENT', async () => {
    const error = 'error message';
    api.setMockCommentRequest(Promise.resolve());
    const dispatch = jest.fn();
    await actions.deleteComment('error')(dispatch);
    expect(api.deleteComment).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: THROW_ERROR_COMMENT, error }],
    ]);
  });
});
