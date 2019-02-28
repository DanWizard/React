import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      todo: {}
    }
  }
  handleSubmit(){
    this.setState({})
  }

  handleChange(evt){
    this.setState({todo: {[evt.target.name]: evt.target.value }})
  }

  render() {
    return (
      	<form>
  			<div class="form-group row">
    			<label for="project" class="col-lg  col-form-label-lg">Project</label>
    			<div class="col-sm-11">
      				<select name='title' value={this.state.todo.title} id='project' className='custom-select' onChange={this.handleChange}>
      					<option value="personal">Personal</option>
      					<option value='work'>Work</option>
      				</select>
    			</div>
  			</div>
  			<div class="form-group row">
    			<label for="description" class="col-lg  col-form-label-lg">Description</label>
    			<div class="col-sm-11">
      				<input type="text" name='description' onChange={this.handleChange} class="form-control" id="description" placeholder=""/>
    			</div>
  			</div>
  			<div class="form-group row">
    			<label for="colFormLabelLg" class="col-lg  col-form-label-lg">Minutes</label>
    			<div class="col-sm-11">
      				<input type="text" class="form-control" id="colFormLabelLg" placeholder=""/>
    			</div>
  			</div>
  			<input type='submit' value='add' className='btn-success'/>
		</form>
    );
  }
}

export default Form;