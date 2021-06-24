import React, {Component} from 'react';

export class Score extends Component {
    render(){  
      return(
        <div className={this.props.className}>{this.props.score}</div>
      );
    }
  }