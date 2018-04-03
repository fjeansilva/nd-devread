import {
  RECEIVE_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from './constants/ActionTypes';

const initialState = {};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {});
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post,
      };
    case EDIT_POST:
      console.log('edit post - update list', action)
      return {
        ...state,
        [action.post.id]: action.post,
      };
    case DELETE_POST: {
      const newState = Object.assign({}, { ...state });
      delete newState[action.id];
      return {
        ...newState,
      };
    }
    default:
      return state;
  }
}
