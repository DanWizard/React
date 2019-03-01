import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
	constructor(props){
		super(props)
	}
  	render() {

  		let content
  		if(this.props.movie.data){
  			console.log('movieContent', this.props.movie.data.Response)
  			if(this.props.movie.data.Response == 'True'){
  				content =
  				<div> 
  				<div className='row'>
  	  		    	<div className='col data'>
  	  		    		<h4><strong>Year:</strong> {this.props.movie.data.Title}</h4>
  	  		    	</div>
  	  		    </div>
  	  		    <div className='row'>
  	  		    	<div className='col data'>
  	  		    		<h4><strong>Director:</strong> {this.props.movie.data.Director}</h4>
  	  		    	</div>
  	  		    </div>
  	  		    <div className='row'>
  	  		    	<div className='col data'>
  	  		    		<h4><strong>Plot:</strong> {this.props.movie.data.Plot}</h4>
  	  		    	</div>
  	  		    </div>
  	  		    </div>	
  			}
  			if(this.props.movie.data.Response == 'False'){
  				content =
  				<div className='row'>
  	  		    	<div className='col data'>
  	  		    		<h4><strong>{this.props.movie.data.Error}</strong></h4>
  	  		    	</div>
  	  		    </div>
  	  		}
  		}
  		
  		
  		



  	  	return (
  	  	  <div className="container movie">
  	  	    {content}
  	  	  </div>
  	  	);
  	}
}

export default Content;