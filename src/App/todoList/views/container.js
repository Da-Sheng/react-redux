import React from 'react';
import { connect } from 'react-redux';
import Todo from './todo';
import { toggleTodo, removeTodo } from '../actions';
import * as filterType from '../../../filterType';
import './index.css';

class TodoList extends React.Component {

  renderTodos = () => {
    const { todos, filter } = this.props;
    const vDom = [];
    todos.forEach(value => {
      let canPush = false;
      const { id, text, completed } = value;
      const { toggleCompleted, removeTodo } = this;
      const props = {
        id, text, completed, toggleCompleted, removeTodo
      };
      switch (filter) {
        case filterType.FILTER_ALL:
          canPush = true;
          break;
        case filterType.FILTER_COMPLETED:
          if (completed)
            canPush = true;
          break;
        case filterType.FILTER_NOTCOMPLETED:
          if (!completed)
            canPush = true;
          break;
      
        default:
          break;
      }
      if (canPush)
        vDom.push(<Todo key={id} {...props} />);
    });
    return vDom;
  }

  toggleCompleted = (id) => {
    const { dispatch } = this.props;
    dispatch(toggleTodo(id))
  }

  removeTodo = (id) => {
    const { dispatch } = this.props;
    dispatch(removeTodo(id))
  }

  render() {
    return (
      <div className="todo-container">
        {this.renderTodos()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
    filter: state.filter,
  }
}

export default connect(mapStateToProps)(TodoList);