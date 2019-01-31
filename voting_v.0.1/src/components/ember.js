import React from 'react'
import './ember.css'

const Ember = (props) => {
	return(
		<div class = "canidate"> 
			<p class = "num">12</p>
			<p class = "lib">Ember</p>
			<button class = "button" onClick={function(){alert("You voted for Ember!")}}>Vote!</button>
		</div>
	);
};

export default Ember