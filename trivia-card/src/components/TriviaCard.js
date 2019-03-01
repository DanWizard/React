import React, { Component } from 'react';
import './TriviaCard.css';

class TriviaCard extends Component {
	constructor(props){
		super(props)
    this.state={
      hint: false
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

  render() {

    let content
    if(!this.state.hint){
      content = 
      <div className='row'>
          <div className='col'>
            <h4 className='text-center'>{this.props.question}</h4>
          </div>
      </div>
    }
    if(this.state.hint){
      content = 
      <div className='row'>
          <div className='col'>
            <h4 className='text-center'>{this.props.hint}</h4>
          </div>
      </div>
    }

    return (
      <div className='container-fluid card' onClick={()=> this.showHint()}>
        <div className='row'>
          <div className='col'>
            <img src={this.props.img} alt='yo'></img>
          </div>
        </div>
      	<div className='row'>
      		<div className='col'>
      			<h1>{this.props.title}</h1>
      		</div>
      	</div>
        {content}
      </div>
    );
  }
}

export default TriviaCard;
