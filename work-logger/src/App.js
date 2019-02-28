import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Personal from './components/Personal'
import Work from './components/Work'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			todos: []
		}
		this.addTodo = this.addTodo.bind(this)
	}
	addTodo(todo){
		console.log('todo', todo)
		const todos = Object.assign([], this.state.todos)
		this.setState({todos:todos.concat(todo)})
	}

  render() {
    return (
      <div className='container-fluid'>
      	<h1 className='text-center'>Work Logger</h1>
      		<Form add={this.addTodo}/>
      	<div className='row cards'>
      		<Personal/>
      		<Work/>
      	</div>
      </div>
    );
  }
}

export default App;
