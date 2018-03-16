import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Todo from './todo';
import * as filterType from '../../../filterType';
import './index.css';

class TodoList extends React.Component {

  renderTodos = () => {
    const { todos } = this.props;
    const vDom = [];
    todos.forEach(value => {
      const { id, text, completed } = value;
      const props = {
        id, text, completed
      };
      vDom.push(<Todo key={id} {...props} />);
    });
    return vDom;
  }

  render() {
    return (
      <div className="todo-container">
        {this.renderTodos()}
      </div>
    );
  }
}

const getTodos = (state) => state.todos;

const getFilter = (state) => state.filter;

const selectVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    switch (filter) {
      case filterType.FILTER_ALL:
        return todos;
      case filterType.FILTER_COMPLETED:
        return todos.filter(value => value.completed);
      case filterType.FILTER_NOTCOMPLETED:
        return todos.filter(value => !value.completed);

      default:
        throw new Error('unsupported filter')
      
    }
  }
)

const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state),
  }
}

export default connect(mapStateToProps)(TodoList);