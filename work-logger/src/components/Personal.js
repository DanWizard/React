import React, { Component } from 'react';
import './Personal.css';


class Personal extends Component {
  constructor(props){
    super(props)
    this.state= {
      todos: [],

    }
  }

  render() {
    const todos = [].concat(this.props.todos)
                    .sort((a, b) => b.total_min - a.total_min)
                    .map((td) => {
                      return(
                        <div className='row todo'>
                          <div className='col item-time'>
                            <p>{td.hrs}:{td.min}</p>
                          </div>
                          <div className='col item-desc'>
                            <p>{td.desc}</p>
                          </div>
                        </div>
                      )
                    });
    console.log("Personal-props-todos", this.props.todos)
    return (
      <div className='col card'>
        <h1 className=' text-center title'>Personal <span>{this.props.total_hours}:{this.props.total_min}</span></h1>
        {todos}
      </div>
    );
  }
}

export default Personal;