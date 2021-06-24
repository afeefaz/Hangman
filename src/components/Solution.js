import React, {Component} from 'react';
import { Letter } from './Letter';

export class Solution extends Component {
    render() {
        let count = 0;
        return (
            <div>
              {[...this.props.solution.word].map(l => (this.props.statusLetters[l]) ? <Letter key={l+count++} letter={l}/> : <Letter key={l+count++} letter={"_"}/>)}<br></br>
              <em>{this.props.solution.hint}</em>
            </div>   
     )
        }
}