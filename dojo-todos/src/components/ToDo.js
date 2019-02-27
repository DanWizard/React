import React, { Component } from 'react';
import './ToDo.css';
import Cell from './Cell'

class ToDo extends Component {
	constructor(props){
		super(props)
		this.state = {
			todo: '',
			todos: [],
      // completed_todos: [],
      // active_todos: [],
      phase: 'all'
		}
		this.handleChange = this.handleChange.bind(this)
		this.createToDo = this.createToDo.bind(this)
    this.removeToDo = this.removeToDo.bind(this)
    this.completedToDo = this.completedToDo.bind(this)
	}

  clearComplete(){
    this.setState({ todos: this.state.todos.filter((td) => td.status !== 'complete')})
  }


  removeToDo(evt, index){
    this.setState({
      todos: this.state.todos.filter((td, Tindex) => Tindex !== index),
      // completed_todos: this.state.completed_todos.filter((cd) => cd.index !== index),
      // active_todos: this.state.todos.filter((at) => at.status !== 'complete')
    })
  }

  completedToDo(evt, index){
    const todos = Object.assign([], this.state.todos)
    if(todos[index].status == 'incomplete'){
      todos[index].status = 'complete'
      // todos[index].index = index
      // let todo = todos[index]
      // console.log('todo', todo)
      
      // console.log("todo",todos[index])
      this.setState({
        todos: todos, 
        // completed_todos:this.state.completed_todos.concat(todo),
        // active_todos: this.state.todos.filter((at) => at.status !== 'complete')
      })
      // console.log("completed_todo",this.state.completed_todos)
    }
    else{
      // const active = Object.assign([], this.state.completed_todos.filter((ct)=> index == ct.index ))
      // active.status = 'incomplete'
      // console.log("active", active)
      let newStatus = 'incomplete'
      this.setState({
        // completed_todos: this.state.completed_todos.filter((ct)=>  index !== ct.index ),
        todos: this.state.todos.map((td, Tindex) => {
          if(Tindex !== index) return td;
          return {...td, status: newStatus}
        }),
      }, 

      // this.setState({active_todos: this.state.todos.filter((at) => at.status !== 'complete') })
      )
      
    }
  }

	createToDo(evt){
		evt.preventDefault();
		let list = Object.assign([], this.state.todos)
		let todo = Object.assign({}, this.state.todo)
		list.push(todo)
		this.setState({
      todos: list, 
      todo:{name:'', status:''},
      // active_todos: list
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
                  <Cell complete={this.completedToDo} status={todo.status} text={todo.name} remove={this.removeToDo} num={index}/>
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
                  <Cell complete={this.completedToDo} status={todo.status} text={todo.name} remove={this.removeToDo} num={index}/>
                )
              }
              })
        }
        if(phase == 'complete'){
          content = 
              this.state.todos.map((todo, index)=>{
                if (todo.status == 'complete'){
                  return(
                  <Cell complete={this.completedToDo} status={todo.status} text={todo.name} remove={this.removeToDo} num={index}/>
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