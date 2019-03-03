import React, { Component } from 'react';
import './TriviaCard.css';

class TriviaCard extends Component {
	constructor(props){
		super(props)
    this.state={
      hint: false,
      score: 0,
      phase: 0,
      answer: 0,
      correct: 'static',
      time: 2,
    }
	}
  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState({time: this.state.time +1})
    }, 1000)
  }

  showHint(){
    if(this.state.hint){
      this.setState({hint:false})
    }
    if(!this.state.hint){
      this.setState({hint:true})
    }
  }

  checkAnswer(ans, id){
    console.log(ans)
    clearInterval(this.myInterval)
    const score = Object.assign({}, this.state)
    if(ans){
      score.score += 50/(this.state.time+1)
      this.setState({score: parseInt(score.score), answer: id, phase: 1, correct: true })
    }
    else{
      score.score -= 50/(this.state.time+1)
      this.setState({score: parseInt(score.score), answer: id, phase: 1, correct: false })
    }
  }

  render() {

    let content, answers, result


    if(this.state.correct == true){
      result = 
      <h5 className='text-center result'>CORRECT!</h5>

    }

    if(!this.state.correct){
      result =
      <h5 className='text-center result'>WRONG!</h5>
    }

    if(this.state.phase == 0){
      answers = 
        <div className='row answers-list'>
            {this.props.question.answers
              .sort((a, b) => 0.5 - Math.random())
              .map((qt) => {
                return(
                  <div onClick={() => this.checkAnswer(qt.isCorrect, qt.answerId)} className='col answer text-center'>
                    <h4>{qt.value}</h4>
                  </div>
                );
            })}
          </div>
    } 

    if(this.state.phase == 1){
      answers = 
      <div className='row answers-list'>
            {this.props.question.answers
              .map((qt) => {
                if(qt.answerId == this.state.answer)
                  return(
                    <div className='col answer-chosen text-center'>
                      <h4>{qt.value}</h4>
                    </div>
                  );
            })}
          </div>
    }

    if(!this.state.hint){
      content = 
      <div className='row'>
          <div className='col'>
            <h4 className='text-center'>{this.props.question.description}</h4>
          </div>
      </div>
    }
    if(this.state.hint){
      content = 
      <div className='row'>
          <div className='col'>
            <h4 className='text-center'>{this.props.question.hint}</h4>
          </div>
      </div>
    }

    return (
      <div>
        <h2 className='time'> time:{this.state.time}</h2>
        <h2 className='score'>score:{this.state.score}</h2>
      <div className='container-fluid card' onClick={()=> this.showHint()}>
        <div className='row'>
          <div className='col'>
            <img src={this.props.question.topic.imageUrl} alt='yo'></img>
          </div>
        </div>
      	<div className='row'>
      		<div className='col'>
      			<h1>{this.props.question.topic.title}</h1>
      		</div>
      	</div>
          {content}
        </div>
          {result}
          {answers}
          
        </div>
    );
  }
}

export default TriviaCard;
