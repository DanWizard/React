import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      todo: {},
      title: 'personal'
      
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(evt){
    evt.preventDefault()
    // console.log('title:', this.state.title, 'Desc:', this.state.description, 'Min:', this.state.minutes)
    const todo = Object.assign({}, this.state.todo)
    let hours = (parseInt(this.state.minutes)/60) >> 0 
    let minutes = parseInt(this.state.minutes) - (hours * 60)
    todo.title = this.state.title
    todo.desc = this.state.description
    todo.hrs = hours
    todo.min = minutes
    todo.total_min = this.state.minutes
    this.setState({todo: todo}, this.props.add(todo))
    this.setState({todo: {}})
  }

  handleChange(evt){
    this.setState(
      {[evt.target.name]: evt.target.value })
  }

  render() {
    return (
      	<form onSubmit={this.handleSubmit}>
  			<div class="form-group row">
    			<label for="project" class="col-lg  col-form-label-lg">Project</label>
    			<div class="col-sm-11">
      				<select name='title' value={this.state.title} id='project' className='custom-select' onChange={this.handleChange}>
      					<option value="personal">Personal</option>
      					<option value='work'>Work</option>
      				</select>
    			</div>
  			</div>
  			<div class="form-group row">
    			<label for="description" class="col-lg  col-form-label-lg">Description</label>
    			<div class="col-sm-11">
      				<input type="text" name='description' value={this.state.description} onChange={this.handleChange} class="form-control" id="description" placeholder=""/>
    			</div>
  			</div>
  			<div class="form-group row">
    			<label for="colFormLabelLg" class="col-lg  col-form-label-lg">Minutes</label>
    			<div class="col-sm-11">
      				<input name='minutes' value={this.state.minutes} onChange={this.handleChange} type="text" class="form-control" id="colFormLabelLg" placeholder=""/>
    			</div>
  			</div>
  			<input type='submit' value='add' className='btn-success'/>
		</form>
    );
  }
}

export default Form;