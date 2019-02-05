import React from 'react';
import './App.css';
import Candidate from './components/candidate';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			votes_angular: 0,
			votes_react: 0,
			votes_vue: 0,
			votes_ember:0
		}
	}

	increaseVote_react(num){
		this.setState({votes_react: this.state.votes_react + 1})
	}
	increaseVote_angular(num){
		this.setState({votes_angular: this.state.votes_angular + 1})
	}
	increaseVote_vue(num){
		this.setState({votes_vue: this.state.votes_vue + 1})
	}
	increaseVote_ember(num){
		this.setState({votes_ember: this.state.votes_ember + 1})
	}

	render(){
		return(
			<div>
				<h1 id = "title">Vote For Your Favorite JS Library</h1>
				<Candidate name="React" num={this.state.votes_react} voted ={ (num) => this.increaseVote_react(num)} />
				<Candidate name="Angular" num={this.state.votes_angular} voted ={ (num) => this.increaseVote_angular(num)}/>
				<Candidate name="Vue" num={this.state.votes_vue} voted ={ (num) => this.increaseVote_vue(num)}/>
				<Candidate name="Ember" num={this.state.votes_ember} voted ={ (num) => this.increaseVote_ember(num)}/>
			</div>

		)
	}
}

export default App