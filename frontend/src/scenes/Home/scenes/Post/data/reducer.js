import { combineReducers } from 'redux';
import postsReducer from './posts/reducer';
import categoriesReducer from './categories/reducer';
import commentsReducer from './comments/reducer';

const dataReducer = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  comments: commentsReducer,
});

export default dataReducer;
