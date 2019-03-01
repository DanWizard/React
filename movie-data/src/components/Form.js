import React, { Component } from 'react';
import './Form.css';
import axios from 'axios'

class Form extends Component {
	constructor(props){
		super(props)
		this.state = {
			search: 'show',
			disable_search: true
		}
		this.handleChange = this.handleChange.bind(this)
		this.subMovie = this.subMovie.bind(this)
	}

	showI(){
		if(!this.state.movie || this.state.movie && this.state.movie.length < 1){
			this.setState({search: 'show'})
		}
	}

	notShowI(){
		this.setState({search: 'not-show'})
	}

	subMovie(evt){
		evt.preventDefault()
		this.props.get(this.state.movie)
	}

	validateSearch(){
		console.log(this.state.movie.length)
		if(this.state.movie.length >= 2){
			this.setState({disable_search: false})
		}
		else{
			this.setState({disable_search: true})
		}
	}

	handleChange(evt){
		this.setState({[evt.target.name]: evt.target.value}, this.validateSearch )
	}
  	render() {
  	  return (
  	    <div className="container-fluid">
  	      <form onSubmit={this.subMovie}>
  	      	<div className='row form'>
  	      		<div className='col search'>
  	      			<input name='movie' onChange={this.handleChange} value={this.state.movie} onFocus={()=> this.notShowI()} onBlur={()=> this.showI()} type='text' className='form-control input'/>
  	      			<i className='fa fa-search' id={this.state.search}></i>
  	      		</div>
  	      		<div className='col'>
  	      			<input type='submit' className='btn-success search-button' value='search' disabled={this.state.disable_search}/>
  	      		</div>
  	      	</div>
  	      </form>
  	    </div>
  	  );
  	}
}

export default Form;