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
			clocks: []
		}
	}

	addClock(timezone_name){
		let wall = this.state.clocks
		let clock = {
			name: timezone_name,
			time: moment().tz(timezone_name).format("h:mm:ss A") 
		}
		wall.push(clock)
		this.setState({clocks: wall})
	}

  	render() {
  		// console.log(moment.tz.names());
  		// console.log(moment().tz("America/Los_Angeles").format("h:mm:ss A"))
    	return (
    	  <div className="container">
    	  	<h1 className="text-center">Working Clocks</h1>
    	  	<div className="row">
    	  		<Form names={this.state.names} />
    	  		<div className="col">
    	  		</div>
    	  	</div>
    	  </div>
    	);
  	}
}

export default App;
