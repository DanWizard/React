import React, { Component } from 'react';
import './InfoCard.css';

class InfoCard extends Component {
	constructor(props){
		super(props)

	}
  render() {
    return (
      <div className='container-fluid'>
      	<div className='row'>
      		<div className='col'>
      			<h1>{this.props.title}</h1>
      		</div>
      	</div>
        <div className='row'>
      		<div className='col'>
      			<h1>{this.props.desc}</h1>
      		</div>
      	</div>
      	<div className='row'>
      		<div className='col'>
      		<img src={this.props.img} alt='yo'></img>
      		</div>
      	</div>
      </div>
    );
  }
}

export default InfoCard;
