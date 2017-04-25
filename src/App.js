import React, { Component } from 'react'
import {MainCircle} from './components/MainCircle/MainCircle'
import {Controler} from './components/Controler/Controler'

import {Container} from './App.styles'


class App extends Component {
  constructor(props){
    super();
    this.state= {
      gameOn: false,
      count: ""
    }

    this.setGameStatus = this.setGameStatus.bind(this);
  }

  setGameStatus(val, setCount){
    this.setState((state) => ({ ...state, gameOn: val, count: setCount}));
  }

  render() {
    const {count, gameOn} = this.state;
    return (
      <Container>
        <MainCircle />
        <Controler count={count} gameOn={gameOn} setGameStatus={this.setGameStatus}/>
      </Container>
    );
  }
}

export default App;
