import React, { Component } from 'react'
import {MainCircle} from './components/MainCircle/MainCircle'
import {Controler} from './components/Controler/Controler'

import {Container} from './App.styles'



const sounds = [
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
  new Audio(require('../assets/Buzz-SoundBible.com-1790490578.mp3')),
  new Audio(require('../assets/Ta Da-SoundBible.com-1884170640.mp3'))
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
    this.gameStatus = this.gameStatus.bind(this);
    this.showError = this.showError.bind(this);
    this.isGameOver = this.isGameOver.bind(this);
    this.handleSwitchOnOffBtn = this.handleSwitchOnOffBtn.bind(this);
    this.handleStartBtn = this.handleStartBtn.bind(this);
    this.handleStrictBtn = this.handleStrictBtn.bind(this);
    this.handleFieldBtn = this.handleFieldBtn.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if(this.state.gameOn !== nextState.gameOn){
      if(!nextState.gameOn){
        alert("cancel timeout");
        //if animation is running and you turn the swith off
        //cancet the animation
      }
    }
  }

  setGameStatus(val){
    this.setState((prevState) => ({
        gameOn: val,
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

  isGameOver(){
    const {count} = this.state;
    return count === 20 ? true : false
  }

  setStartGame(){
    this.setState((prevState) => ({ ...prevState, start: true}));
    //wait 2 seconds for flash effect
    setTimeout(() => {
      this.gameStatus();
    }, 2000);
  }

  setStrictMode(){
    this.setState((prevState) => ({...prevState, strict: !prevState.strict}));
  }

  restartGame(){
    // repeat the sequence after 2 seconds, show error or winn effect takes 2 seconds
    setTimeout(() => {
      this.setGameStatus(true);
    }, 2000);
    // i don't know why I neeed delay here
    setTimeout(() => {
      this.setStartGame();
    }, 3000);
  }


  gameStatus(compTurn = this.state.compTurn){
    if(this.isGameOver()){
      sounds[5].play()
     this.setState((prevState) => ({
         gameOn: true,
         count: "WIN",
         start: false,
         strict: false,
         sequence: [],
         playerSequence: [],
         compTurn: false,
         field1: false,
         field2: false,
         field3: false,
         field4: false,
         showing: false
       }));
       setTimeout(() => {
         //restartGame
         this.restartGame();
       }, 2000);
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
    // state doesn't update yet
    this.showSequence(newSequence);

  }

  showSequence(sequence){
    this.setState((prevState) => ({...prevState, compTurn: true, showing:true }));
    const frequency = 1000;

    sequence.forEach((val, i) => {
      setTimeout(() => {sounds[val].play(); this.setFieldState(val);}, i * frequency); //
      setTimeout(() => this.setFieldState(val), i * frequency + 500);
    });

    setTimeout(()=>this.setState((prevState) => ({...prevState, compTurn: false, showing: false})), sequence.length * 1000);
  }

  showError(){
    sounds[4].play();
    this.setState((prevState) => ({...prevState, count: "!!!"}));
    setTimeout(() => {
      this.setState((prevState) => ({...prevState, count: prevState.sequence.length}));
    }, 2000);
  }


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
    const {sequence, playerSequence, strict, count} = this.state;
    const newPlayerSequence = playerSequence.slice()
    newPlayerSequence.push(newItem)
    this.setState((prevState) => ({...prevState, playerSequence: newPlayerSequence }));

    if(!this.checkVal(newPlayerSequence, sequence)){
      this.showError();
      this.setState((prevState) => ({...prevState, playerSequence: [] }));
      if (strict) {
          this.restartGame();
        } else {
        // repeat the sequence after 2 seconds, show error effect takes 2 seconds
        setTimeout(() => {
          this.showSequence(sequence);
        }, 2000);
      }
    } else {
      if(sequence.length  === newPlayerSequence.length){
        const currentCount = count;
        this.setState((prevState) => ({...prevState,
          playerSequence: [],
          count: ':)'
        }));
        // set back the count to number that can be evaluated by isGameOver function
        // it happens just one millisecond before newSequence is rendered so it is invisible to human eye
        setTimeout(() => {
          this.setState((prevState) => ({...prevState, count: currentCount}))
        }, 1999)
        setTimeout(() => {
          this.gameStatus(true);
        }, 2000);
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
      this.setGameStatus(false);
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
      }, 500);
      this.listenInput(val);
    }
  }

  render() {
    const {count, gameOn, start, strict, field1, field2, field3, field4, compTurn, showing} = this.state;

    return (
      <Container>
        <MainCircle field1={field1} field2={field2} field3={field3} field4={field4} handleFieldBtn={this.handleFieldBtn}
        compTurn={compTurn} showing={showing} count={count}/>
        <Controler count={count} gameOn={gameOn} start={start} strict={strict} handleStartBtn={this.handleStartBtn}
        handleSwitchOnOffBtn={this.handleSwitchOnOffBtn} handleStrictBtn={this.handleStrictBtn} />
      </Container>
    );
  }
}

export default App;
