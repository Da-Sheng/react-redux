import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import Perf from 'react-addons-perf';

import * as filterType from './filterType';

import { reducer as todoReducer } from './App/todoList';

import { reducer as filterReducer } from './App/filter';

const win = window;

win.Perf = Perf;

const initValues = {
  todos: [],
  filter: filterType.FILTER_ALL,
};

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : f => f,
);

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default createStore(reducer, initValues, storeEnhancers);