import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Dojo Todos</h1>
        <ToDo/>
      </div>
    );
  }
}

export default App;
