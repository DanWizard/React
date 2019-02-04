import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/counter.js'


const Index = (props) => {
	return(
		<div>
			<Counter/>
		</div>
	)
}

ReactDOM.render(<Index />, document.getElementById('root'));


