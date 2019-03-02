import React, { Component } from 'react';
import './App.css';
import TriviaCard from './components/TriviaCard'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    "questionId": 1,
    "description": "What player holds the career record for most stolen bases?",
    "hint": "This player stole a single season record of 130 bases in 1983 as a member of the Oakland Athetics",
    "topicId": 1,
    "topic": {
      "topicId": 1,
      "title": "Baseball",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvV_tsbT_kw10GstYSzppI60QKpc7_hRSzkHrRf3_IvYJZoPBqIg"
    },
    "answers": [
      {
        "answerId": 1,
        "value": "Rickey Henderson",
        "questionId": 1,
        "isCorrect": true
      },
      {
        "answerId": 2,
        "value": "Wade Boggs",
        "questionId": 1,
        "isCorrect": false
      },
      {
        "answerId": 3,
        "value": "Willie Mays Hayes",
        "questionId": 1,
        "isCorrect": false
      }
    ]
    };
  }
  render() {
    return (
      <div>
        <TriviaCard question = {this.state}/>
      </div>
    );
  }
}

export default App;
