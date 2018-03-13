import shortid from 'shortid';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actiontypes';

export const addTodo = (text) => ({
  type: ADD_TODO,
  completed: false,
  id: shortid.generate(),
  text,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});