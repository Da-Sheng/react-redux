import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import './index.css';

const Todo = ({ id, text, completed, removeTodo, toggleCompleted }) => (
  <div key={id} onClick={toggleCompleted} className={completed ? 'todo unCompleted' : 'todo'}>
    <div className="todo-text">
      {text}
    </div>
    <div onClick={removeTodo} className="todo-delete">
      删除本条
    </div>
  </div>
);

// class Todo extends React.Component {

//   shouldComponentUpdate (nextProps, nextState) {
//     return (nextProps.completed !== this.props.completed) ||
//     (nextProps.text !== this.props.text);
//   }

//   toggleCompleted = () => {
//     const { id } = this.props;
//     this.props.toggleCompleted(id);
//   }

//   removeTodo = () => {
//     const { id } = this.props;
//     this.props.removeTodo(id);
//   }

//   render() {
//     const { id, text, completed } = this.props;
//     console.log(id)
//     let classname = 'todo';
//     if (completed)
//       classname = 'todo unCompleted';
//     // console.log(`render${id}`)
//     return (
//       <div key={id} onClick={this.toggleCompleted} className={classname}>
//         <div className="todo-text">
//           {text}
//         </div>
//         <div onClick={this.removeTodo} className="todo-delete">
//           删除本条
//         </div>
//       </div>
//     );
//   }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  return {
    toggleCompleted: () => {
      dispatch(toggleTodo(id))
    },
    removeTodo: () => {
      dispatch(removeTodo(id))
    }
  }
}


export default connect(null, mapDispatchToProps)(Todo);
// export default Todo;

