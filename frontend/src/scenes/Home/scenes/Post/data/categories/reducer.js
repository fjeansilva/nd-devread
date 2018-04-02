import { RECEIVE_CATEGORIES } from './constants/ActionTypes';

const initialState = {};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories.reduce((acc, curr) => ({ ...acc, [curr.path]: curr }), {});
    default:
      return state;
  }
}
