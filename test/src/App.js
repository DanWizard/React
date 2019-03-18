import React, { Component } from 'react';
import './App.css';
import Test from './components/Test'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      num : 0
    }
    // this.increment = this.increment.bind(this)
  }

  increment(){
    this.setState({num: this.state.num + 1})
  }
  render() {
    return (
      <div className="App">
        <h1>Click Here:{this.state.num}</h1>
        <Test incrementer={() => this.increment()} parent_num={this.state.num}/>
      </div>
    );
  }
}

export default App;
