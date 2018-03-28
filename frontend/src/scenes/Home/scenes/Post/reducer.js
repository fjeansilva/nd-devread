import _ from 'lodash';
import {
  START_REQUEST_POST,
  END_REQUEST_POST,
  THROW_ERROR_POST,
} from './data/posts/constants/ActionTypes';
import dataReducer from './data/reducer';

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
    default: {
      const rest = _.omit(state, Object.keys(initialState));
      return {
        ...state,
        data: dataReducer(rest.data, action),
      };
    }
  }
}
