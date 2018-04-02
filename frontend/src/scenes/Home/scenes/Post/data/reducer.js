import { combineReducers } from 'redux';
import postsReducer from './posts/reducer';
import categoriesReducer from './categories/reducer';

const dataReducer = combineReducers({ posts: postsReducer, categories: categoriesReducer });

export default dataReducer;
