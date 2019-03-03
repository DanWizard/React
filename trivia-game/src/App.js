import React, { Component } from 'react';
import './App.css';
import TriviaCard from './components/TriviaCard'
import axios from 'axios'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      game:false
    }
    this.getAPI = this.getAPI.bind(this)
    this.getAPI()
  }
  getAPI(){
    axios.get('http://34.215.246.172/api').then((response) => {
      console.log(response.data)
      let yo = response.data
      this.setState({game: response.data})
      console.log('after', this.state.game)
    })  
  }
  
  render() {
    
    console.log(this.state.game)
    if(this.state.game){
      return (
      <div>
        <TriviaCard questions={this.state.game}/>
      </div>
      );
    }
    else{
      return(
        <div>

        </div>
      )
    }
    
  }
}

export default App;
