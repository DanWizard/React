import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
	constructor(props){
		super(props)
	}
  	render() {
  	  return (
  	    <div className="container movie">
  	      <div className='row'>
  	      	<div className='col data'>
  	      		<h4><strong>Year:</strong></h4>
  	      	</div>
  	      </div>
  	      <div className='row'>
  	      	<div className='col data'>
  	      		<h4><strong>Director:</strong></h4>
  	      	</div>
  	      </div>
  	      <div className='row'>
  	      	<div className='col data'>
  	      		<h4><strong>Plot:</strong></h4>
  	      	</div>
  	      </div>
  	    </div>
  	  );
  	}
}

export default Content;