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
			<div id ={this.props.color} onClick={() => this.props.guessed(this.props.position)}>{this.props.position}</div>
		)
	}
}

export default Square