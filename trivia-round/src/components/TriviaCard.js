import React, { Component } from 'react';
import './TriviaCard.css';

class TriviaCard extends Component {
	constructor(props){
		super(props)
    this.state={
      hint: false,
      score: 0
    }
	}
  
  showHint(){
    if(this.state.hint){
      this.setState({hint:false})
    }
    if(!this.state.hint){
      this.setState({hint:true})
    }
  }

  checkAnswer(ans){

  }

  render() {
    // const answers = [].concat(this.props.question.answers)
    //                   .sort((a,b) => 0.5 - Math.random())
    //                   .map((qt) => {
    //                     return(
    //                       <div className='col'>
    //                         <h4>{qt.value}</h4>
    //                       </div>
    //                     )
    //                   })  

    let content
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
          <div className='row answers-list'>
            {this.props.question.answers
              .sort((a, b) => 0.5 - Math.random())
              .map((qt) => {
                return(
                  <div onClick={() => this.checkAnswer(qt.isCorrect)} className='col answer text-center'>
                    <h4>{qt.value}</h4>
                  </div>
                );
            })}
          </div>
        </div>
    );
  }
}

export default TriviaCard;
