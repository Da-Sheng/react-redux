import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actiontypes';

export default (state = [], action) => {
  const { text, id, completed, type } = action;
  switch (type) {
    case ADD_TODO:
      return [{ text, id, completed }, ...state];

    case TOGGLE_TODO:

      return state.map(value => {
        if (value.id === id) {
          return {...value, completed: !value.completed};
        }
        return value;
      });

    case REMOVE_TODO:

      return state.filter(value => {
        return value.id !== id;
      });

    default:
      return state;
    }
  }