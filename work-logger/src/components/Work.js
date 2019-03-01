import React, { Component } from 'react';
import './Work.css';


class Work extends Component {
  constructor(props){
    super(props)
    this.state= {
      todos: [],

    }
    // this.calcTime = this.calcTime.bind(this)
  }


 
  // static getDerivedStateFromProps()

  // calcTime(){
  //   console.log('hello calc')
  //   const todos = Object.assign([], this.props.todos)
  //   todos.map((td) =>{
  //     let hours = (td.min / 60) >> 0
  //     let minutes = td.min - (hours * 60)
  //     td.hrs = hours
  //     td.min = minutes
  //     // return this.setState({todos:todos})
  //   })
  //   console.log(todos)
  //   this.setState({todos: todos})
  // }

  render() {
    // this.calcTime()
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
    console.log("Work-props-todos", this.props.todos)
    return (
      <div className='col card'>
      	<h1 className='text-center'>Work</h1>
        <h1>{this.props.total_hours}:{this.props.total_min}</h1>
        {todos}
      </div>
    );
  }


  // componentDidUpdate(){
  //   this.calcTime()
  // }
}

export default Work;