import React, { Component } from 'react';
import { container as TodoList, addTodo as AddTodo } from './App/todoList';
import { container as Filter } from './App/filter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
        <Filter />
      </div>
    );
  }
}

export default App;
