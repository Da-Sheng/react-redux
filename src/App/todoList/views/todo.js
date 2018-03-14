import React from 'react';
import './index.css';

class Todo extends React.Component {

  toggleCompleted = () => {
    const { id } = this.props;
    this.props.toggleCompleted(id);
  }

  removeTodo = () => {
    const { id } = this.props;
    this.props.removeTodo(id);
  }

  render() {
    const { id, text, completed } = this.props;
    let classname = 'todo';
    if (completed)
      classname = 'todo unCompleted';
    // console.log(`render${id}`)
    return (
      <div key={id} onClick={this.toggleCompleted} className={classname}>
        <div className="todo-text">
          {text}
        </div>
        <div onClick={this.removeTodo} className="todo-delete">
          删除本条
        </div>
      </div>
    );
  }
}


export default Todo;

