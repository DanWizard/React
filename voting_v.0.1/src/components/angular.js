import React from 'react'
import './angular.css'

const Angular = (props) => {
	return(
		<div class = "canidate"> 
			<p class = "num">12</p>
			<p class = "lib">Angular</p>
			<button class = "button" onClick={function(){alert("You voted for Angular!")}}>Vote!</button>
		</div>
	);
};

export default Angular