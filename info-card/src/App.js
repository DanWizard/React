import React, { Component } from 'react';
import './App.css';
import InfoCard from './components/InfoCard'

class App extends Component {
  render() {
    return (
      <div>
        <InfoCard title='title' desc ='Yo what is up' img='./images/flamingo.jpg'/>
      </div>
    );
  }
}

export default App;
