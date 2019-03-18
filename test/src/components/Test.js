import React, { Component } from 'react';
import './Test.css';

class Test extends Component {
	constructor(props){
		super(props)
	}
  render() {
    return (
      <div className="Test">
        	<h1 className='text-center' onClick={this.props.incrementer}>World</h1>
        	<h1>parentNum:{this.props.parent_num}</h1>
        	<div className='row'>
        		<div className='col'>
        			yo
        		</div>
        		<div className='col'>
        			yo
        		</div>
        	</div>
      </div>
    );
  }
}

export default Test;
