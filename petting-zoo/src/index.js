import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Animal from './components/Animals'
import App from './App'


const Index = (props) => {
	return(
		<App />
	)
}

ReactDOM.render(<Index />, document.getElementById('root'));


