import { combineReducers } from 'redux';

import postReducer from './Post/reducer';

const reducer = combineReducers({ Post: postReducer });

export default reducer;
