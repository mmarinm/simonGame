import React, { Component } from 'react'
import {MainCircle} from './components/MainCircle/MainCircle'
import {Controler} from './components/Controler/Controler'

import {Container} from './App.styles'


class App extends Component {
  constructor(props){
    super();
    this.state= {
      gameOn: false,
      count: "",
      start: false
    }

    this.setGameStatus = this.setGameStatus.bind(this);
    this.setStartGame = this.setStartGame.bind(this);
  }

  setGameStatus(val, setCount){
    this.setState((state) => ({ ...state, gameOn: val, count: setCount}));
  }

  setStartGame(){
    this.setState((state) => ({ ...state, start: true}));
  }

  render() {
    const {count, gameOn, start} = this.state;
    return (
      <Container>
        <MainCircle />
        <Controler count={count} gameOn={gameOn} setGameStatus={this.setGameStatus} setStartGame={this.setStartGame} start={start} />
      </Container>
    );
  }
}

export default App;
