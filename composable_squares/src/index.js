import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blue from './components/blue';
import Red from './components/red';
import Pink from './components/pink';

const Index = (props) => {
	return (
		<div>
			<h1>Composable Squares</h1>
			<Blue />
			<Red />
			<Pink />
		</div>
	);
};

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PW
