import {
  RECEIVE_COMMENTS,
  VOTE_COMMENT,
  ADD_COMMENT,
} from '../comments/constants/ActionTypes';

import * as api from './api';

export const fetchComments = postId => async (dispatch) => {
  await api.getComments(postId)
    .then(comments => dispatch({ type: RECEIVE_COMMENTS, comments }))
    .catch(error => console.log(error));
};

export const voteComment = (id, option) => (dispatch) => {
  api.voteComment(id, option)
    .then(comment => dispatch({ type: VOTE_COMMENT, comment }))
    .catch(error => console.log(error));
};

export const addComment = comment => (dispatch) => {
  api.addComment(comment)
    .then(data => dispatch({ type: ADD_COMMENT, comment: data }))
    .catch(error => console.log(error));
};
