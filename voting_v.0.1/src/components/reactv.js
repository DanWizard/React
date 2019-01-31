import React from 'react'
import './react.css'

const Reactv = (props) => {
	return(
		<div class = "canidate"> 
			<p class = "num">15</p>
			<p class = "lib">React</p>
			<button class = "button" onClick={function(){alert("You voted for React!")}}>Vote!</button>
		</div>
	);
};

export default Reactv