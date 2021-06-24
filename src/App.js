import React, {Component} from 'react';
import './App.css';
import {Score} from './components/Score.js';
import { Solution } from './components/Solution';
import { Letters } from './components/Letters';

class App extends Component{
  constructor(){
    super()
    this.state = {
      statusLetters : this.generateLetterStatuses(),
      solution : {word : "WOOORD" , hint : "hinnt"},
      score : 100,
      scoreClass : "high-score",
      gameOver:false,
      count:0
     }
  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  check = async (letter) =>{
    let newLetters = {...this.state.statusLetters}
    let tempScore = this.state.score
    newLetters[letter] = true
    await this.setState({statusLetters:newLetters})

    if(this.state.score >= 80){
      await this.setState({scoreClass:"high-score"})
    }
    if(this.state.score >= 50 && this.state.score <= 80){
      await this.setState({scoreClass:"medium-score"})
    }
    if(this.state.score <= 50){
      await this.setState({scoreClass:"low-score"})
    }
    if(this.state.solution.word.includes(letter)){
      let tempCount =this.state.count
      if((this.state.solution.word.split( new RegExp( letter, "gi" ) ).length-1) > 1){
        tempScore += 5 * (this.state.solution.word.split( new RegExp( letter, "gi" ) ).length-1)
        tempCount =this.state.count + (this.state.solution.word.split( new RegExp( letter, "gi" ) ).length-1)
      }else{
      tempScore += 5 
      tempCount =this.state.count + 1
      }
      await this.setState({
        score:tempScore,
        count:tempCount
      })
    }else {
      tempScore -= 20
      await this.setState({score:tempScore})
    }
    this.gameOver()
  }
  gameOver = async () => {
    if(this.state.score <= 0 || this.state.count === this.state.solution.word.length){
      await this.setState({gameOver:true})
    }
  }
  render(){
    
    return (
      <div className='letters'>
        {
        this.state.gameOver ? <div>Game Over</div> :
        <div>
          <Score score={this.state.score} className={this.state.scoreClass}/>
          <Solution solution ={this.state.solution} statusLetters={this.state.statusLetters}/>
          <Letters statusLetters={this.state.statusLetters} check={this.check}/>
        </div>
        }
      </div>
    );
  }
} 

export default App;