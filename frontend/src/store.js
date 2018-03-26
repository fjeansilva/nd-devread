import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as postsReducer } from './scenes/Home/scenes/Post/reducer';

const appReducer = combineReducers({
	Posts: postsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
export default createStore(
  appReducer,
  enhancer,
);
