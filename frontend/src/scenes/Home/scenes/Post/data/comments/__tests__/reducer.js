/* global describe, it, expect */
import { RECEIVE_COMMENTS, VOTE_COMMENT, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from '../constants/ActionTypes';
import reducer from '../reducer';

const initialState = {};
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

describe('Comment reducer', () => {
  it('should return an initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle RECEIVE_COMMENTS', () => {
    const state = {};
    expect(reducer(state, { type: RECEIVE_COMMENTS, comments: [firstComment, secondComment] }))
      .toEqual({
        ...state,
        1: {
          ...firstComment,
        },
        2: {
          ...secondComment,
        },
      });
  });

  it('should handle VOTE_COMMENT', () => {
    const state = {
      [firstComment.id]: {
        ...firstComment,
      },
      [secondComment.id]: {
        ...secondComment,
      },
    };

    firstComment.voteScore += firstComment.voteScore;

    expect(reducer(state, { type: VOTE_COMMENT, comment: firstComment }))
      .toEqual({
        ...state,
        [firstComment.id]: {
          ...firstComment,
        },
      });
  });

  it('should handle ADD_COMMENT', () => {
    const state = {
      [firstComment.id]: {
        ...firstComment,
      },
    };

    expect(reducer(state, { type: ADD_COMMENT, comment: secondComment }))
      .toEqual({
        ...state,
        [secondComment.id]: {
          ...secondComment,
        },
      });
  });


  it('should handle EDIT_COMMENT', () => {
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

    const state = {
      [firstComment.id]: {
        ...firstComment,
      },
      [secondComment.id]: {
        ...secondComment,
      },
    };

    expect(reducer(state, { type: EDIT_COMMENT, comment: updatedComment }))
      .toEqual({
        ...state,
        [updatedComment.id]: {
          ...updatedComment,
        },
      });
  });

  it('should handle DELETE_COMMENT', async () => {
    const state = {
      [firstComment.id]: {
        ...firstComment,
      },
      [secondComment.id]: {
        ...secondComment,
      },
    };

    expect(reducer(state, { type: DELETE_COMMENT, comment: firstComment }))
      .toEqual({
        [secondComment.id]: {
          ...secondComment,
        },
      });
  });
});
