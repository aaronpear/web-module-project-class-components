import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const toDoList = [
  {
    task: 'Make a To Do List app',
    id: 0,
    checked: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      toDoList: toDoList
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList  />
        <TodoForm />
      </div>
    );
  }
}

export default App;
