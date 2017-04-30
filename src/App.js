import React, { Component } from 'react'
import {MainCircle} from './components/MainCircle/MainCircle'
import {Controler} from './components/Controler/Controler'

import {Container} from './App.styles'

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
      count: "--",
      start: false,
      strict: false,
      sequence: [],
      playerSequence: [],
      compTurn: true,
      field1: false,
      field2: false,
      field3: false,
      field4: false,
      showing:true
    }

    this.setGameStatus = this.setGameStatus.bind(this);
    this.setStartGame = this.setStartGame.bind(this);
    this.setStrictMode = this.setStrictMode.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.generateSequence = this.generateSequence.bind(this);
    this.setFieldState = this.setFieldState.bind(this);
    this.checkVal = this.checkVal.bind(this);
    this.gameLogic = this.gameLogic.bind(this);
    this.showError = this.showError.bind(this);
    this.isGameOver = this.isGameOver.bind(this);
    this.handleSwitchOnOffBtn = this.handleSwitchOnOffBtn.bind(this);
    this.handleStartBtn = this.handleStartBtn.bind(this);
    this.handleStrictBtn = this.handleStrictBtn.bind(this);
    this.handleFieldBtn = this.handleFieldBtn.bind(this);
  }

  setGameStatus(val){
    this.setState((prevState) => ({ ...prevState, gameOn: val}));
  }

  isGameOver(){
    const {count} = this.state;
    return count === 20 ? true : false
  }

  setStartGame(){
    this.setState((prevState) => ({ ...prevState, start: true}));
    //wait 2 seconds for flash effect
    setTimeout(() => {
      this.gameLogic();
    }, 2001);
  }

  setStrictMode(){
    this.setState((prevState) => ({...prevState, strict: !prevState.strict}));
  }


  gameLogic(compTurn = this.state.compTurn){
    if(this.isGameOver()){
     this.setState((prevState) => ({
         gameOn: false,
         count: "WIN!",
         start: false,
         strict: false,
         sequence: [],
         playerSequence: [],
         compTurn: true,
         field1: false,
         field2: false,
         field3: false,
         field4: false,
         showing: false
       }));
    } else {
      if(compTurn){
        this.generateSequence();
        this.setState((prevState)=>({...prevState, count: prevState.sequence.length }));
      }
    }
  }

  generateSequence(){
    const {sequence} = this.state;
    const newSequence = sequence.slice();
    newSequence.push( Math.floor(Math.random() * 4));
    this.setState((prevState) => ({...prevState, sequence: newSequence}));
    //sequence doesn't update yet
    this.showSequence(newSequence);

  }

  showSequence(sequence){
    this.setState((prevState) => ({...prevState, compTurn: true, showing:true }));
    let timeDelayed = 0, frequency = 1000 - sequence.length * 20;

    sequence.forEach((val, i) => {
      timeDelayed = Math.max(i * frequency, timeDelayed);
      if(val === 0){
        setTimeout(() => {sounds[val].play(); this.setFieldState(val);}, i * frequency);
        setTimeout(() => this.setFieldState(val), i * frequency + 500);
      } else if(val === 1){
        setTimeout(() => {sounds[val].play(); this.setFieldState(val);}, i * frequency);
        setTimeout(() => this.setFieldState(val), i * frequency + 500);
      } else if(val === 2){
        setTimeout(() =>{sounds[val].play(); this.setFieldState(val);}, i * frequency);
        setTimeout(() => this.setFieldState(val), i * frequency + 500);
      } else {
        setTimeout(() =>{sounds[val].play(); this.setFieldState(val);}, i * frequency);
        setTimeout(() => this.setFieldState(val), i * frequency + 500);
      }
    });
    setTimeout(()=>this.setState((prevState) => ({...prevState, compTurn: false, showing: false})), timeDelayed);
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
      field4: false,
      showing:false
    }));
  }


  showError(){
    this.setState((prevState) => ({...prevState, count: "!!!"}));
    setTimeout(() => {
      this.setState((prevState) => ({...prevState, count: prevState.sequence.length}));
    }, 2001);
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

  checkVal(userInput, sequence){
    return userInput.every((val, index)=>{
      return val === sequence[index];
    });
  }

  listenInput(newItem){
    const {sequence, playerSequence} = this.state;
    const newPlayerSequence = playerSequence.slice()
    newPlayerSequence.push(newItem)
    this.setState((prevState) => ({...prevState, playerSequence: newPlayerSequence }));

    if(!this.checkVal(newPlayerSequence, sequence)){
      this.showError();
      this.setState((prevState) => ({...prevState, playerSequence: [] }));
      //repeat the sequence after 2 seconds
      setTimeout(() => {
        this.showSequence(sequence);
      }, 2001);
    } else {
      if(sequence.length  === newPlayerSequence.length){
        this.setState((prevState) => ({...prevState,
          playerSequence: [],
          compTurn: true,
          count: 'cool'
        }));
        setTimeout(() => {
          this.gameLogic(true);
        }, 2001);
      }
    }
  }

  handleSwitchOnOffBtn(){
    const {strict, gameOn} = this.state

    if(!gameOn){
      this.setGameStatus(!gameOn);
    }
    // if strict is on and you switch the OFF button
    else if(gameOn && strict) {
      this.setStrictMode()
    }
    else if(gameOn){
      this.restartGame();
    }
  }

  handleStartBtn(){
    this.setStartGame();
  }

  handleStrictBtn(){
    this.setStrictMode()
  }

  handleFieldBtn(val){
    const{start, compTurn} = this.state

    if(start && !compTurn){
      sounds[val].play()
      this.setFieldState(val);
      setTimeout(() => {
        this.setFieldState(val);
      }, 501);
      this.listenInput(val);
    }
  }

  render() {
    const {count, gameOn, start, strict, field1, field2, field3, field4, compTurn, showing} = this.state;

    return (
      <Container>
        <MainCircle field1={field1} field2={field2} field3={field3} field4={field4} handleFieldBtn={this.handleFieldBtn}
        compTurn={compTurn} showing={showing}/>
        <Controler count={count} gameOn={gameOn} start={start} strict={strict} handleStartBtn={this.handleStartBtn}
        handleSwitchOnOffBtn={this.handleSwitchOnOffBtn} handleStrictBtn={this.handleStrictBtn} />
      </Container>
    );
  }
}

export default App;
