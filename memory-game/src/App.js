import React from 'react';
import './App.css';
import Square from './components/square'
class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    var grid = [
    {postion: 1, color: 'white'},
    {postion: 2, color: 'white'},
    {postion: 3, color: 'white'},
    {postion: 4, color: 'white'},
    {postion: 5, color: 'white'},
    {postion: 6, color: 'white'},
    {postion: 7, color: 'white'},
    {postion: 8, color: 'white'},
    {postion: 9, color: 'white'},
    {postion: 10, color: 'white'},
    {postion: 11, color: 'white'},
    {postion: 12, color: 'white'},
    ]
    return (
      <div >
        <h1>Memory Game</h1>
        <div id='container'>
          <div id= "row">
            <Square color = {grid[0].color} position = {grid[0].postion}/>
            <Square color = {grid[1].color} position = {grid[1].postion}/>
            <Square color = {grid[2].color} position = {grid[2].postion}/>
            <Square color = {grid[3].color} position = {grid[3].postion}/>
          </div>
          <div id= "row">
            <Square color = {grid[4].color} position = {grid[4].postion}/>
            <Square color = {grid[5].color} position = {grid[5].postion}/>
            <Square color = {grid[6].color} position = {grid[6].postion}/>
            <Square color = {grid[7].color} position = {grid[7].postion}/>
          </div>
          <div id= "row">
            <Square color = {grid[8].color} position = {grid[8].postion}/>
            <Square color = {grid[9].color} position = {grid[9].postion}/>
            <Square color = {grid[10].color} position = {grid[10].postion}/>
            <Square color = {grid[11].color} position = {grid[11].postion}/>
          </div>
          <div id="row_button">
            <button>Start Game</button>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
