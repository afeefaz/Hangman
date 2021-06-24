import React, {Component} from 'react';
import { Letter } from './Letter';

export class Letters extends Component {
    render(){
      return(
        <div>
            <div>Available Letters</div>
            {Object.keys(this.props.statusLetters).map(le => (this.props.statusLetters[le]) ? <Letter className="checked" key={le} letter={le} check={this.props.check} />  : <Letter className="notChecked" key={le} letter={le} check={this.props.check} />)}
        </div>
      );
    }
  }