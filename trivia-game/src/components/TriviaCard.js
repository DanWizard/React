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
      time: 0,
      question: -1,
      complete: false,
      start:true
    }
	}
  componentDidMount() {
    
  }

  startTimer(){
    this.myInterval = setInterval(() => {
      this.setState({time: this.state.time +1})
    }, 1000)
  }
  nextQuestion(){
    if(this.props.questions.length -1 == this.state.question){
      this.setState({complete: true})
    }
    this.startTimer()
    this.setState({question: this.state.question + 1, phase: 0, correct: 'static', time: 0, start: false})
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
    
    console.log(this.props.question)
    const question_num = this.state.question
    let content, answers, result, next

    if(this.state.start){
      return(
        <div className='button-holder'>
        <h1 className='text-center'>Trivia Game!</h1>
        <button className='next btn 'onClick={() => this.nextQuestion()}>Begin</button>
        </div>
      )
    }

    if(this.state.complete){
      return(<div>
        <h1 className='text-center'>Complete!</h1>
        <h3 className='text-center'>Final Score: {this.state.score}</h3>
      </div>)
    }

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
            {this.props.questions[question_num].answers
              // .sort((a, b) => 0.5 - Math.random())
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
            {this.props.questions[question_num].answers
              .map((qt) => {
                if(qt.answerId == this.state.answer)
                  return(
                    <div className='col answer-chosen text-center'>
                      <h4>{qt.value}</h4>
                    </div>
                  );
            })}
      </div>
      next = <button className='btn next' onClick = {() => this.nextQuestion()}>Next Question</button>
    }
    if(!this.state.hint){
      content = 
      <div className='row'>
          <div className='col'>
            <h4 className='text-center'>{this.props.questions[question_num].description}</h4>
          </div>
      </div>
    }
    if(this.state.hint){
      content = 
      <div className='row'>
          <div className='col'>
            <h4 className='text-center'>{this.props.questions[question_num].hint}</h4>
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
            <img src={this.props.questions[question_num].topic.imageUrl} alt='yo'></img>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h1>{this.props.questions[question_num].topic.title}</h1>
          </div>
        </div>
          {content}
        </div>
          {result}
          {answers}
          <div className='button-holder'>
            {next}
          </div>
        </div>
    );
 
  }
}

export default TriviaCard;
