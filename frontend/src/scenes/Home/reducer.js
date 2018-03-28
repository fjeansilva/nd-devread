import { combineReducers } from 'redux';

import scenesReducer from './scenes/reducer';

const reducer = combineReducers({ scenes: scenesReducer });

export default reducer;
