import React from 'react';
import './App.css';
import Square from './components/square'

function GameStarted(props){

}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      grid: [
        {position: 1, color: 'white'},
        {position: 2, color: 'white'},
        {position: 3, color: 'white'},
        {position: 4, color: 'white'},
        {position: 5, color: 'white'},
        {position: 6, color: 'white'},
        {position: 7, color: 'white'},
        {position: 8, color: 'white'},
        {position: 9, color: 'white'},
        {position: 10, color: 'white'},
        {position: 11, color: 'white'},
        {position: 12, color: 'white'},
      ],
      timer: 3,

      start: 0,

      shape: "button"
    
    };
  }

  startTimer(props){
    props.start += 1
    this.setState(props)
    console.log(props)
    this.myInterval = setInterval(()=>{
      this.setState({timer: this.state.timer - 1})
    }, 1000 )

  }

  startGame(props){
    console.log(props)
    var temp = null
    var spaces = [];
    for (var i = 4 - 1; i >= 0; i--) {
     var num = Math.floor((Math.random() * 13) + 0)
     spaces.push(num)
    }
    for (let t of spaces) {
      for (var v = props.grid.length - 1; v >= 0; v--) {
        console.log(props.grid[v])
        if (props.grid[v].position == t) {
          props.grid[v].color = 'blue'
          this.setState(props)
        }
      }
    }
    props.start += 1
    this.setState(props)
    console.log(props)
  }

  render() {
    const count = this.state.timer
    const status = this.state.start
    const style = this.state.shape
    let phase

    if (status == 0) {
      phase = <button onClick={() => this.startTimer(this.state) }>Start Game</button>;
    }
    if (status == 1) {
      phase = <h2> Get Ready to memorize cells in: {count} </h2>;
    }
    if (status == 2) {
      phase = null;
    }
    if (status == 3) {
      phase = <h3> Guess the  corrent cells </h3>
    }
    if (status == 4) {
      phase = <button>Play Again</button>
    }    

    return (
      <div >
        <h1>Memory Game</h1>
        <div id='container'>
          <div id= "row">
            <Square color = {this.state.grid[0].color} position = {this.state.grid[0].postion}/>
            <Square color = {this.state.grid[1].color} position = {this.state.grid[1].postion}/>
            <Square color = {this.state.grid[2].color} position = {this.state.grid[2].postion}/>
            <Square color = {this.state.grid[3].color} position = {this.state.grid[3].postion}/>
          </div>
          <div id= "row">
            <Square color = {this.state.grid[4].color} position = {this.state.grid[4].postion}/>
            <Square color = {this.state.grid[5].color} position = {this.state.grid[5].postion}/>
            <Square color = {this.state.grid[6].color} position = {this.state.grid[6].postion}/>
            <Square color = {this.state.grid[7].color} position = {this.state.grid[7].postion}/>
          </div>
          <div id= "row">
            <Square color = {this.state.grid[8].color} position = {this.state.grid[8].postion}/>
            <Square color = {this.state.grid[9].color} position = {this.state.grid[9].postion}/>
            <Square color = {this.state.grid[10].color} position = {this.state.grid[10].postion}/>
            <Square color = {this.state.grid[11].color} position = {this.state.grid[11].postion}/>
          </div>
          <div id={style}>
            {phase}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
