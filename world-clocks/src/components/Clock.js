import React from 'react';
import './Clock.css'


class Clock extends React.Component {
	constructor(props){
		super(props)

	}

	render(){
		return(
			<div className="col">
				<h1>{this.props.name}</h1>
				<h1>{this.props.time}</h1>
			</div>
		);
	}
}

export default Clock