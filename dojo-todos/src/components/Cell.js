import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
	constructor(props){
		super(props)
    this.state = {
      phase : 'static',
      name: this.props.text
    }
    this.deleteHandler = this.deleteHandler.bind(this)
    this.completeHandler = this.completeHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
	}

  deleteHandler(evt) {
      console.log(this.props.num)
      this.props.remove(evt, this.props.num);
  }
  completeHandler(evt) {
      console.log(this.props.num)
      this.props.complete(evt, this.props.num);
  }

  changePhase(){
    this.setState({phase: 'variable'})
  }

  handleBlur(){
    this.props.update(this.props.num, this.state.name)
    this.setState({phase: 'static'})
  }

  handleChange(event){
    this.setState({name: event.target.value});
  }

  render() {
      const phase = this.state.phase
      let content 

      if(phase == 'static'){
        content = <p onClick={() => this.changePhase()}>{this.props.text}</p>
      }

      if(phase == 'variable'){
        content = <input value={this.state.name} className='input' onChange={this.handleChange} onBlur={this.handleBlur}/>
      }

    	return (
       <div className= 'row cell' id='cell' >
         <i className='fa fa-circle-thin fa-2x' onClick={this.completeHandler}></i>
         <i className={`fa fa-check ${this.props.status}`}></i>
         {content}
         <i className='fa fa-times' onClick={this.deleteHandler} ></i>
       </div>
    	  
    	);
  }
}

export default Cell;