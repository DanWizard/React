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
        {position: 0, color: 'white'},
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
        
      ],
      timer: 3,

      start: 0,

      shape: "button",

      answer: [],

      guess: []
    
    };
  }
  checkAnswer(props){
    console.log("yo")
    let index
    for (var i = props.answer.length - 1; i >= 0; i--) {
      for (var v = props.guess.length - 1; v >= 0; v--) {
        if(props.answer[i] != props.guess[v]){
          index = props.answer[i]
          props.grid[index].color = 'red'   
        }
        if(props.answer[i] == props.guess[v]){
          index = props.answer[i]
          props.grid[index].color = 'green'
        }
      }
    }
    props.start += 1
    this.setState(props)
  }
  guessAnswer(props){
    let map = this.state
    if(this.state.start == 3) {
      map.grid[props].color = "grey"    
      map.guess.push(props)
      console.log(map.guess)
      this.setState(map)
    }
  }

  resetGrid(props){
    for (var i = this.state.grid.length - 1; i >= 0; i--) {
       props.grid[i].color = "white"
    }
    this.setState(props)
    if(this.state.start == 2){
      clearInterval(this.myInterval)
      props.start += 1
      this.setState(props)
    }
    if(this.state.start == 4){
      
    }
  }

  startTimer(props){
    props.start += 1
    this.setState(props)
    // console.log(props)
    this.myInterval = setInterval(()=>{
      if(this.state.timer == 0 && this.state.start == 1){
        // console.log("yo1")
        this.startGame(props)
        this.setState({timer: 3})
        return
      }
      if(this.state.timer == 0 && this.state.start == 2){
        // console.log("yo1")
        this.resetGrid(props)
        this.setState({timer: 3})
        return
      }
      this.setState({timer: this.state.timer - 1})
    }, 1000 )
    // console.log("yo")
    return

  }
  recordAnswer(){
    let arr = this.state.answer
    for (var i = this.state.grid.length - 1; i >= 0; i--) {
      if( this.state.grid[i].color == "blue"){
        arr.push(this.state.grid[i].position)
      }
    }
    this.setState({answer: arr})
    console.log(this.state.answer)
    this.startTimer(this.state)
    console.log(this.state.timer)
   }


  startGame(props){
    // console.log(props)
    var temp = null
    var spaces = [];
    for (var i = 4 - 1; i >= 0; i--) {
     var num = Math.floor((Math.random() * 13) + 0)
     spaces.push(num)
    }
    for (let t of spaces) {
      for (var v = props.grid.length - 1; v >= 0; v--) {
        // console.log(props.grid[v])
        if (props.grid[v].position == t) {
          props.grid[v].color = 'blue'
          this.setState(props)
        }
      }
    }
    // props.start += 1
    // this.setState(props)
    // console.log(props)
    clearInterval(this.myInterval)
    this.recordAnswer()
  }

  render() {
    const count = this.state.timer
    const status = this.state.start
    const style = this.state.shape
    let phase, click

    if (status == 0) {
      phase = 
      <div id ="button">
        <button onClick={() => this.startTimer(this.state) }>Start Game</button>;
      </div>
      
    }
    if (status == 1) {
      phase = <h2>Get Ready to memorize cells in: {count} </h2>;
    }
    if (status == 2) {
      phase = <h2>Time left to memorize: {count}</h2>;

    }
    if (status == 3) {
      phase = 
      <div>
        <h2> Guess the correct cells </h2>
        <button onClick={() => this.checkAnswer(this.state) }>Check</button>
      </div>
      
    }
    if (status == 4) {
      phase = 
      <div>
        <button>Play Again</button>
      </div> 
    }   

    return (
      <div >
        <h1>Memory Game</h1>
        <div id='container'>
          <div id= "row">
            <Square grid = {this.state} color = {this.state.grid[0].color} position = {this.state.grid[0].position} guessed ={ (grid) => this.guessAnswer(grid)}/>
            <Square grid = {this.state} color = {this.state.grid[1].color} position = {this.state.grid[1].position}guessed ={ (grid) => this.guessAnswer(grid)}/>
            <Square grid = {this.state} color = {this.state.grid[2].color} position = {this.state.grid[2].position}guessed ={ (grid) => this.guessAnswer(grid)}/>
            <Square grid = {this.state} color = {this.state.grid[3].color} position = {this.state.grid[3].position}guessed ={ (grid) => this.guessAnswer(grid)}/>
          </div>
          <div id= "row">
            <Square grid = {this.state} color = {this.state.grid[4].color} position = {this.state.grid[4].position}guessed ={ (grid) => this.guessAnswer(grid)}/>
            <Square grid = {this.state} color = {this.state.grid[5].color} position = {this.state.grid[5].position}guessed ={ (grid) => this.guessAnswer(grid)}/>
            <Square grid = {this.state} color = {this.state.grid[6].color} position = {this.state.grid[6].position}guessed ={ (grid) => this.guessAnswer(grid)}/>
            <Square grid = {this.state} color = {this.state.grid[7].color} position = {this.state.grid[7].position}guessed ={ (grid) => this.guessAnswer(grid)}/>
          </div>
          <div id= "row">
            <Square grid = {this.state} color = {this.state.grid[8].color} position = {this.state.grid[8].position}guessed ={ (grid) => this.guessAnswer(grid)}/>
            <Square grid = {this.state} color = {this.state.grid[9].color} position = {this.state.grid[9].position}guessed ={ (grid) => this.guessAnswer(grid)}/>
            <Square grid = {this.state} color = {this.state.grid[10].color} position = {this.state.grid[10].position}guessed ={ (grid) => this.guessAnswer(grid)}/>
            <Square grid = {this.state} color = {this.state.grid[11].color} position = {this.state.grid[11].position}guessed ={ (grid) => this.guessAnswer(grid)}/>
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
