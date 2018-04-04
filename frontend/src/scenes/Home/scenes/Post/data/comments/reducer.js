import { RECEIVE_COMMENTS, VOTE_COMMENT, ADD_COMMENT } from '../comments/constants/ActionTypes';

export default function commentReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {});
    case VOTE_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment,
      };
    case ADD_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment,
      };
    default:
      return state;
  }
}
