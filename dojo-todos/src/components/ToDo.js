import React, { Component } from 'react';
import './ToDo.css';
import Cell from './Cell'

class ToDo extends Component {
	constructor(props){
		super(props)
		this.state = {
			todo: '',
			todos: [],
      completed_todos: []
		}
		this.handleChange = this.handleChange.bind(this)
		this.createToDo = this.createToDo.bind(this)
    this.removeToDo = this.removeToDo.bind(this)
    this.completedToDo = this.completedToDo.bind(this)
	}

  removeToDo(evt, index){
    const list = Object.assign([], this.state.todos)
    list.splice(index, 1);
    this.setState({todos: list})
  }

  completedToDo(evt, index){
    console.log(index)
    console.log('hello')
    const list = Object.assign([], this.state.todos)
    list.splice(index, 1);
    this.setState({todos: list})
  }

	createToDo(evt){
		evt.preventDefault();
		let list = Object.assign([], this.state.todos)
		let todo = Object.assign({}, this.state.todo)
		list.push(todo)
		this.setState({todos: list, todo:{name:'', status:''}})
    console.log(this.state.todo)
	}

	handleChange(event){
		this.setState({todo: {name:event.target.value, status:'incomplete'}});
	}


  	render() {
  	  	return (
  	  	  <div className="row">
  	  	  	<div className="col co-form">
  	  	  		<form onSubmit={this.createToDo}>
  	  	  			<input onChange={this.handleChange} className="create" type='text' value={this.state.todo.name} placeholder="Add ToDo"/>
  	  	  		</form>
  	  	  		{this.state.todos.map((todo, index)=>{
  	  	  			return(
						      <Cell complete={this.completedToDo} status={todo.status} text={todo.name} remove={this.removeToDo} num={index}/>
  	  	  			)
  	  	  		})}
  	  	  		<div className= 'row'>
  	  	  			<div className='col text-center'>
  	  	  				<p></p>
  	  	  			</div>
  	  	  			<div className='col text-center'>
  	  	  				<a className='link' href=''>All</a>
  	  	  			</div>
  	  	  			<div className='col text-center'>
  	  	  				<a className='link' href=''>Active</a>
  	  	  			</div>
  	  	  			<div className='col text-center'>
  	  	  				<a className='link' href=''>Completed</a>
  	  	  			</div>
  	  	  		</div>
  	  	  	</div>
  	  	  </div>
  	  	);
  	}
}

export default ToDo;