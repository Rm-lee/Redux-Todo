import React, { Component } from 'react';
import Todos from './components/todos'
import './App.css';


class App extends Component { 
 
  render() {
    return (
      <div>
        <Todos />
      </div>
    );
  }
}

export default App;