import React, { Component } from 'react';
import './Second.css';

class Second extends Component {
  constructor(props, match){
    super(props, match)
  }
  render() {
    return (
      <div className="Second">
        hello {this.props.match.params.name}
      </div>
    );
  }
}

export default Second;
