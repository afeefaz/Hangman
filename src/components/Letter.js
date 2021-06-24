import React, {Component} from 'react';

export class Letter extends Component {
    check = () =>{
        this.props.check(this.props.letter)
    }
    render() {
        return (
           <span onClick={this.check} className={this.props.className}>{this.props.letter + " "}</span>
     )
    }
}