import React, { Component } from 'react';
import moment from 'moment-timezone';
import Form from './components/Form'
import Clock from './components/Clock'

import './App.css';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			names: moment.tz.names(),
			clocks: [],
			name: 'hello'
		}
		this.addClock = this.addClock.bind(this)
		// this.handleChange = this.handleChange.bind(this)
	}

	addClock(timezone_name){
		console.log(timezone_name)
		console.log(timezone_name)
		console.log(timezone_name)
		let wall = this.state.clocks
		let clock = {
			name: timezone_name,
			time: moment().tz(timezone_name).format("h:mm:ss A") 
		}
		wall.push(clock)
		this.setState({clocks: wall})
		console.log(this.state.clocks)
	}
	// console.log(moment.tz.names());
  	// console.log(moment().tz("America/Los_Angeles").format("h:mm:ss A"))
	// handleChange(){
	// 	this.setState({name: event.target.value});
	// }
	// change={this.handleChange}

	
  	render() {
    	return (
    	  <div className="container">
    	  	<h1 className="text-center">Working Clocks</h1>
    	  	<div className="row">
    	  		<Form name={this.state.name}  names={this.state.names} add={this.addClock} />
    	  		<div className="col">
    	  			{this.state.clocks.map((clock, index)=>{
    	  				return(
							<Clock key={index} name={clock.name} time={clock.time} />	
    	  					)
    	  				})}
    	  		</div>
    	  	</div>
    	  </div>
    	);
  	}
}

export default App;
