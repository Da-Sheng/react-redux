import { createStore, combineReducers } from 'redux';

import * as filterType from './filterType';

import { reducer as todoReducer } from './App/todoList';

import { reducer as filterReducer } from './App/filter';

const initValues = {
  todos: [],
  filter: filterType.FILTER_ALL,
};

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default createStore(reducer, initValues);