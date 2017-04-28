import React, { Component } from 'react'
import {MainCircle} from './components/MainCircle/MainCircle'
import {Controler} from './components/Controler/Controler'

import {Container} from './App.styles'

export const sounds = [
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
];

class App extends Component {
  constructor(props){
    super();
    this.state= {
      gameOn: false,
      count: "--",
      start: false,
      strict: false,
      sequence: [],
      playerSequence: [],
      compTurn: true,
      field1: false,
      field2: false,
      field3: false,
      field4: false
    }

    this.setGameStatus = this.setGameStatus.bind(this);
    this.setStartGame = this.setStartGame.bind(this);
    this.setStrictMode = this.setStrictMode.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.togglePlayer = this.togglePlayer.bind(this);
    this.setPlayerSequence = this.setPlayerSequence.bind(this);
    this.generateSequence = this.generateSequence.bind(this);
    this.setFieldState = this.setFieldState.bind(this);
    this.compareSequences = this.compareSequences.bind(this);
  }

  setGameStatus(val, setCount){
    this.setState((prevState) => ({ ...prevState, gameOn: val, count: setCount}));
  }

  setStartGame(){
    this.setState((prevState) => ({ ...prevState, start: true}));
    setTimeout(() => {
      this.setState((prevState) => ({...prevState, count: 1}))
    }, 2000);
  }

  setStrictMode(){
    this.setState((prevState) => ({...prevState, strict: !prevState.strict}));
  }

  togglePlayer(){
    this.setState((prevState) => ({...prevState, compTurn: !prevState.compTurn}));
  }

  restartGame(){
    this.setState((prevState) => ({
      gameOn: false,
      count: "--",
      start: false,
      strict: false,
      sequence: [],
      playerSequence: [],
      compTurn: true,
      field1: false,
      field2: false,
      field3: false,
      field4: false
    }));
  }

  setPlayerSequence(newItem){
    const {playerSequence} = this.state;
    const newSequence = playerSequence.slice()
    newSequence.push(newItem)
    this.setState((prevState) => ({...prevState, playerSequence: newSequence }));
  }

  generateSequence(){
    const {sequence} = this.state;
    const newSequence = sequence.slice()
    newSequence.push( Math.floor(Math.random() * 4));
    this.setState((prevState) => ({...prevState, sequence: newSequence}));
    this.showSequence(newSequence);
  }

  showSequence(sequence){
    sequence.forEach((fieldVal, index) => {
      this.setFieldState(fieldVal);
      sounds[fieldVal].play();
      setTimeout(() => {
        this.setFieldState(fieldVal);
      }, 500 );
      if(sequence.length === 1){
        this.togglePlayer();
      }
    })
  }

  //every field has it's own state that gets changed onClick or when showing sequence
  setFieldState(val){
    if(val === 0){
      this.setState((prevState) => ({...prevState, field1: !prevState.field1}));
    }
    if(val === 1){
      this.setState((prevState) => ({...prevState, field2: !prevState.field2}));
    }
    if(val === 2){
      this.setState((prevState) => ({...prevState, field3: !prevState.field3}));
    }
    if(val === 3){
      this.setState((prevState) => ({...prevState, field4: !prevState.field4}));
    }
  }

  compareSequences(){
    const {sequence, playerSequence} = this.state;
    let newSequence = sequence.slice();
    newSequence = newSequence.filter((fieldVal, index) => {
      if(fieldVal !== playerSequence[index]){
        return false
      }
      return true
    })
    if(newSequence.length !== playerSequence.length) return false;
    return true;
  }


  render() {
    const {count, gameOn, start, strict, field1, field2, field3, field4,
    compTurn} = this.state;

    return (
      <Container>
        <MainCircle field1={field1} field2={field2} field3={field3} field4={field4} setFieldState={this.setFieldState}
        compTurn={compTurn} setPlayerSequence={this.setPlayerSequence}
        compareSequences={this.compareSequences}/>
        <Controler count={count} gameOn={gameOn} setGameStatus={this.setGameStatus}
        setStartGame={this.setStartGame} start={start} setStrictMode={this.setStrictMode}
        strict={strict} generateSequence={this.generateSequence} restartGame={this.restartGame}/>
      </Container>
    );
  }
}

export default App;
