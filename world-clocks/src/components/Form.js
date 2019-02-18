import React from 'react';
import './Form.css'


class Form extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			name: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.clickHandler = this.clickHandler.bind(this)
	}

	clickHandler(evt) {
    	evt.preventDefault();
    	this.props.add(this.state.name);
    	this.setState({
    	  name: ''
    	});
  	}
	handleChange(event){
		this.setState({name: event.target.value});
	}
	// onSubmit={this.props.add}
	// <input className="btn" type="submit" value="Add Clock"/>
	render(){
		const time_name = "yo"
		const hello = "hello"
		return(
			<div className="col">
					<button className="btn" onClick={this.clickHandler}>Add Clock</button>
					<select value={this.state.name} onChange={this.handleChange}>
						{this.props.names.map((name) =>{
							return(
								<option value={name}>{name}</option>
							)
							
						})}
					</select>
			</div>
		);
	}
}

export default Form