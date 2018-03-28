import { combineReducers } from 'redux';
import postsReducer from './posts/reducer';

const dataReducer = combineReducers({ posts: postsReducer });

export default dataReducer;
