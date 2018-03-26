import { combineReducers } from 'redux';
import { reducer as postsReducer } from './posts/reducer';

export const reducer = combineReducers({
	posts: postsReducer,
});
