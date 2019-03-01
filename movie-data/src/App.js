import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Content from './components/Content'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movie: {}
    }
    this.getMovie = this.getMovie.bind(this)
  }

  getMovie(movie){
    console.log('movie', movie)
    axios.get(`http://www.omdbapi.com/?apikey=ce0d797c&t=${movie}`).then((response) => {
      this.setState({movie: response})
      console.log(this.state.movie)
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <h1 className='text-center'>Movie Data</h1>
        <Form get={this.getMovie}/>
        <Content movie={this.state.movie} />
      </div>
    );
  }
}

export default App;
