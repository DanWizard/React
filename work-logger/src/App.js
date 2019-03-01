import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Personal from './components/Personal'
import Work from './components/Work'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			personal_todos: [],
			personal_time_total_hours: '',
			personal_time_total_min: '',
			work_todos: [],
			work_time_total_hours: 0,
			work_time_total_min: 0
		}
		this.addTodo = this.addTodo.bind(this)
		
	}
	addTodo(todo){
		console.log('todo', todo)
		if(todo.title == 'personal'){
			const Ptodos = Object.assign([], this.state.personal_todos)
			this.setState({personal_todos:Ptodos.concat(todo)})
		}
		else{
			const Wtodos = Object.assign([], this.state.work_todos)
			this.setState({work_todos:Wtodos.concat(todo)}, () => {
				const todos = Object.assign([], this.state.work_todos)
  				let total = 0
  				todos.map((td) => total += parseInt(td.total_min))
  				console.log('first run through', this.state.work_todos)
  				let hours = (total / 60) >> 0
  				let min = total - (hours * 60)
    			this.setState({work_time_total_hours: hours, work_time_total_min: min})
			})
			
		}
	}

  render() {
    return (
      <div className='container-fluid'>
      	<h1 className='text-center'>Work Logger</h1>
      		<Form  add={this.addTodo}/>
      	<div className='row cards'>
      		<Personal todos={this.state.personal_todos}/>
      		<Work total_hours={this.state.work_time_total_hours} total_min= {this.state.work_time_total_min} todos={this.state.work_todos}/>
      	</div>
      </div>
    );
  }
}

export default App;
