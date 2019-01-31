import React from 'react'
import './vue.css'

const Vue = (props) => {
	return(
		<div class = "canidate"> 
			<p class = "num">12</p>
			<p class = "lib">Vue</p>
			<button class = "button" onClick={function(){alert("You voted for Vue!")}}>Vote!</button>
		</div>
	);
};

export default Vue