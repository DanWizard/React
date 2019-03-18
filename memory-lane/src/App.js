import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavLink to="/" exact activeStyle= { {color: "green"}} >Home</NavLink>
          <NavLink to="/about" exact activeStyle= { {color: "green"}} >About</NavLink>
          <NavLink to="/second/Mike" exact activeStyle= { {color: "green"}} >Name</NavLink>
          <Route path = '/' exact strict render = {
            () => {
              return(
                <h1>Hello World</h1>
              )
            }
          }/>
          <Route path = '/about' exact strict render = {
            () => {
              return(
                <h1>Hello Daniel</h1>
              )
            }
          }/>
          <Route path = '/first' exact strict component={First}/>
          <Route path = '/second/:name' exact strict component={Second}/>
        </div>
      </Router>
    );
  }
}

export default App;
