import React from 'react';
import './candidate.css';

const Candidate = (props) => {
	return(
		<div className = "canidate"> 
			<p className = "num">{props.num}</p>
			<p className = "lib">{props.name}</p>
			<button className = "button" onClick={ () => props.voted(props.num)}>Vote!</button>
		</div>
	);
};

export default Candidate