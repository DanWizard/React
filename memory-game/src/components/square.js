import React from 'react';
import './square.css';

class Square extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			selected: true,
		}
	}
	render(){
		return(
			<div id ={this.props.color}>{this.props.position}</div>
		)
	}
}

export default Square