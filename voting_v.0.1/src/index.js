import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Reactv from './components/reactv';
import Vue from './components/vue'
import Angular from './components/angular'
import Ember from './components/ember'

const Index = (props) => {
	return (
		<div>
			<h1 id = "title">Vote For Your Favorite JS Library</h1>
			<Reactv />
			<Vue />
			<Angular />
			<Ember />
		</div>
	);
};

ReactDOM.render(<Index />, document.getElementById('root'));

