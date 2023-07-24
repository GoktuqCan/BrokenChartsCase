import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './home/reducer';

const middlewares = [thunk];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const rootReducer = combineReducers({
  home: homeReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
