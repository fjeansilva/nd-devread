/* global describe, it, expect, jest */
import {
  RECEIVE_COMMENTS,
  VOTE_COMMENT,
  ADD_COMMENT,
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

  it('voteComment should dispatch a VOTE_COMMENT', () => {
    api.setMockCommentRequest(Promise.resolve(firstComment));
    const dispatch = jest.fn();
    const commentId = 1;
    actions.voteComment(commentId, 'upVote')(dispatch);
    expect(api.voteComment).toHaveBeenCalled();
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
});
