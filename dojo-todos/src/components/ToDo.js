import React, { Component } from 'react';
import './ToDo.css';
import Cell from './Cell'

class ToDo extends Component {
	constructor(props){
		super(props)
		this.state = {
			todo: '',
			todos: [],
      phase: 'all'
		}
    this.updateChange = this.updateChange.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.createToDo = this.createToDo.bind(this)
    this.removeToDo = this.removeToDo.bind(this)
    this.completedToDo = this.completedToDo.bind(this)
	}

  clearComplete(){
    this.setState({ todos: this.state.todos.filter((td) => td.status !== 'complete')})
  }


  removeToDo(evt, index){
    this.setState({ todos: this.state.todos.filter((td, Tindex) => Tindex !== index)})
  }

  completedToDo(evt, index){
    const todos = Object.assign([], this.state.todos)
    if(todos[index].status == 'incomplete'){
      todos[index].status = 'complete'
      this.setState({
        todos: todos, 
      })
    }
    else{
      let newStatus = 'incomplete'
      this.setState({
        todos: this.state.todos.map((td, Tindex) => {
          if(Tindex !== index) return td;
          return {...td, status: newStatus}
        })
      })
    }
  }

	createToDo(evt){
		evt.preventDefault();
		let list = Object.assign([], this.state.todos)
		let todo = Object.assign({}, this.state.todo)
		list.push(todo)
		this.setState({
      todos: list, 
      todo:{name:'', status:''}
    })
    console.log(this.state.todo)
	}

	handleChange(event){
		this.setState({todo: {name:event.target.value, status:'incomplete'}});
	}

  changePhase(num){
      console.log('hello')
      if(num == 1){
        this.setState({phase: 'all'})
      }
      if(num == 2){
        this.setState({phase: 'active'})
      }
      if(num == 3){
        this.setState({phase: 'complete'})
      }
  }

  updateChange(index, name){
    console.log('index', index)
    console.log('name', name)
    const todos = Object.assign([], this.state.todos)
    todos[index].name = name
    this.setState({todos: todos})
  }

  	render() {
        const phase = this.state.phase

        let content, count, clear

        if(phase == 'all'){
          count = 
          <div className='col text-center'>
              <p className='link'>{this.state.todos.length} todos</p>
          </div>
          content = 
              this.state.todos.map((todo, index)=>{
                return(
                  <Cell update={this.updateChange} complete={this.completedToDo} status={todo.status} text={todo.name} remove={this.removeToDo} num={index}/>
                )
              })
          clear = 
          <div className='col text-center'>
              <p className='link' onClick={() => this.clearComplete()}>clear completed</p>
          </div>
        }
        if(phase == 'active'){
          content = 
              this.state.todos.map((todo, index)=>{
                if(todo.status == 'incomplete'){
                return(
                  <Cell update={this.updateChange} complete={this.completedToDo} status={todo.status} text={todo.name} remove={this.removeToDo} num={index}/>
                )
              }
              })
        }
        if(phase == 'complete'){
          content = 
              this.state.todos.map((todo, index)=>{
                if (todo.status == 'complete'){
                  return(
                  <Cell update={this.updateChange} complete={this.completedToDo} status={todo.status} text={todo.name} remove={this.removeToDo} num={index}/>
                  )
                }
                
              })
          clear = 
          <div className='col text-center'>
              <p className='link' onClick={() => this.clearComplete()}>clear completed</p>
          </div>
        }

  	  	return (
  	  	  <div className="row">
  	  	  	<div className="col co-form">
  	  	  		<form onSubmit={this.createToDo}>
  	  	  			<input onChange={this.handleChange} className="create" type='text' value={this.state.todo.name} placeholder="Add ToDo"/>
  	  	  		</form>
  	  	  		 {content}
  	  	  		<div className= 'row'>
  	  	  			{count}
  	  	  			<div className='col text-center'>
  	  	  				<p className='link' onClick={() => this.changePhase(1)}>All</p>
  	  	  			</div>
  	  	  			<div className='col text-center'>
  	  	  				<p className='link' onClick={() => this.changePhase(2)}>Active</p>
  	  	  			</div>
  	  	  			<div className='col text-center'>
  	  	  				<p className='link' onClick={() => this.changePhase(3)}>Completed</p>
  	  	  			</div>
                {clear}
  	  	  		</div>
  	  	  	</div>
  	  	  </div>
  	  	);
  	}
}

export default ToDo;