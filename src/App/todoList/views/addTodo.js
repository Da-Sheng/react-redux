import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import './index.css';

class TodoList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onChange = e => {
    const { value } = e.target;
    this.setState({ value });
  }

  onClick = () => {
    const { dispatch } = this.props;
    const { value } = this.state;
    if (!!value)
    dispatch(addTodo(value));
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;
    // console.log(this.props)
    return (
      <div className="todo-add">
        <input value={value} onChange={this.onChange} />
        <div onClick={this.onClick} className="todo-add-btn">
          新增
        </div>
      </div>
    );
  }
}

export default connect()(TodoList);