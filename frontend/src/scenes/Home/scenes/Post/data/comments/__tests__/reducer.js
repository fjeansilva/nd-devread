/* global describe, it, expect */
import { RECEIVE_COMMENTS, VOTE_COMMENT } from '../constants/ActionTypes';
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
});
