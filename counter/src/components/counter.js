import React from 'react';
import './counter.css';


export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: 1,
            name: 'Daniel',
            color: "white"
        }
    }


    render(){
    	if (this.state.text > 14) {
    		this.state.color = "blue"
    	}
        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                <button
                	id = {this.state.color}
                    onClick={ () => this.setState({ text: this.state.text + 1 }) } >
                    Click me
                </button>
                <h1>You clicked me {this.state.text} times</h1>
            </div>
        )
    }
}