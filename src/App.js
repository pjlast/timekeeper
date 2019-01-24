import React, { Component } from 'react';
import { TaskList } from './components/TaskList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskList />
      </div>
    );
  }
}

export default App;
