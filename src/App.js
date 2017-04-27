import React, { Component } from 'react'
import {MainCircle} from './components/MainCircle/MainCircle'
import {Controler} from './components/Controler/Controler'

import {Container} from './App.styles'
import "./App.css"

const sounds = [
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
      count: "",
      start: false,
      strict: false,
      sequence: [],
      compTurn: true,
      field1: false,
      field2: false,
      field3: false,
      field4: false
    }

    this.setGameStatus = this.setGameStatus.bind(this);
    this.setStartGame = this.setStartGame.bind(this);
    this.setStrictMode = this.setStrictMode.bind(this);
    this.setFieldState = this.setFieldState.bind(this)
  }

  setGameStatus(val, setCount){
    this.setState((prevState) => ({ ...prevState, gameOn: val, count: setCount}));
  }

  setStartGame(){
    this.setState((prevState) => ({ ...prevState, start: true}));
  }

  setStrictMode(){
    this.setState((prevState) => ({...prevState, strict: !prevState.strict}))
  }

  generateSequence(){
    const {sequence} = this.state;
    const newSequence = sequence.slice().push( Math.floor(Math.random() * 4));
    this.setState((prevState) => ({...prevState, sequence: newSequence}));
  }

  showSequence(sequence){
    sequence.forEach((fieldVal, index) => {
      this.setFieldState(fieldVal)
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

  render() {
    const {count, gameOn, start, strict, field1, field2, field3, field4} = this.state;
    return (
      <Container>
        <MainCircle field1={field1} field2={field2} field3={field3} field4={field4} setFieldState={this.setFieldState} />
        <Controler count={count} gameOn={gameOn} setGameStatus={this.setGameStatus}
        setStartGame={this.setStartGame} start={start} setStrictMode={this.setStrictMode}
        strict={strict} />
      </Container>
    );
  }
}

export default App;
