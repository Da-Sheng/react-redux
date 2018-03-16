import React, { Component } from 'react';
import { container as TodoList, addTodo as AddTodo } from './App/todoList';
import { container as Filter } from './App/filter';
import CountDown from './App/CountDown';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
        <Filter />
        <CountDown initCount={20}>
            {
              (count) => (
                  <div>
                    {!!count ? count : "hahahaha"}
                  </div>
                )
              }
        </CountDown>
      </div>
    );
  }
}

export default App;
