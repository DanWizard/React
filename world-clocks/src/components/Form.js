import React from 'react';
import './Form.css'


class Form extends React.Component {
	constructor(props){
		super(props)

	}

	render(){
		return(
			<div className="col">
				<form>
					<input className="btn" type="submit" value="Add Clock"/>
					<select>
						{this.props.names.map((name) =>{
							return(
								<option value={name}>{name}</option>
							)
							
						})}
					</select>
				</form>
			</div>
		);
	}
}

export default Form