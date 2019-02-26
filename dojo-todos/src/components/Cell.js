import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
	constructor(props){
		super(props)
    this.deleteHandler = this.deleteHandler.bind(this)
    this.completeHandler = this.completeHandler.bind(this)
	}

  deleteHandler(evt) {
      console.log(this.props.num)
      this.props.remove(evt, this.props.num);
  }
  completeHandler(evt) {
      console.log(this.props.num)
      this.props.complete(evt, this.props.num);
  }

  render() {
      const phase = this.props.status
    	return (
       <div className= 'row cell' id='cell' >
         <i className='fa fa-circle-thin fa-2x' onClick={this.completeHandler}></i>
         <i className={`fa fa-check ${this.props.status}`}></i>
         <p>{this.props.text}</p>
         <i className='fa fa-times' onClick={this.deleteHandler} ></i>
       </div>
    	  
    	);
  }
}

export default Cell;