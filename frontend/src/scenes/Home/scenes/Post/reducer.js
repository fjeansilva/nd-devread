import _ from 'lodash';
import {
  START_REQUEST_POST,
  END_REQUEST_POST,
  THROW_ERROR_POST,
  SELECTED_POST,
  VOTE_POST,
  RESET_POST,
} from './data/posts/constants/ActionTypes';
import dataReducer from './data/reducer';
import orderReducer from './components/OrderBy/reducer';

const initialState = { isFetching: false, error: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_REQUEST_POST:
      return {
        ...state,
        isFetching: true,
      };
    case END_REQUEST_POST:
      return {
        ...state,
        isFetching: false,
      };
    case THROW_ERROR_POST:
      return {
        ...state,
        error: action.error.message,
      };
    case VOTE_POST: {
      const newData = state.data;
      newData.posts[action.post.id] = action.post;
      const selectedPost = state.postSelected;

      if (selectedPost) {
        if (selectedPost.id === action.post.id) {
          return {
            ...state,
            postSelected: action.post,
          };
        }
      }

      return {
        ...state,
        data: newData,
      };
    }
    case SELECTED_POST:
      return {
        ...state,
        postSelected: action.post,
      };
    case RESET_POST:
      return {
        ...state,
        postSelected: undefined,
      };
    default: {
      const rest = _.omit(state, Object.keys(initialState));
      return {
        ...state,
        data: dataReducer(rest.data, action),
        postsOrderBy: orderReducer(rest.postsOrderBy, action),
      };
    }
  }
}
