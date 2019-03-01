import React, { Component } from 'react';
import './App.css';
import TriviaCard from './components/TriviaCard'

class App extends Component {
  render() {
    return (
      <div>
        <TriviaCard title='Baseball' question ='What is a strike?' hint='it involves the pitcher' img='./images/flamingo.jpg'/>
      </div>
    );
  }
}

export default App;
