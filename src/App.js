import React, { Component } from 'react'
import {MainCircle} from './components/MainCircle/MainCircle'
import {Controler} from './components/Controler/Controler'

import {Container} from './App.styles'


class App extends Component {
  constructor(props){
    super();
    this.state= {
      gameOn: false
    }

    this.setGameStatus.bind(this);
  }

  setGameStatus(){
    this.setState((state) => ({ ...state, hidden: !state.gameOn}));
  }

  render() {
    return (
      <Container>
        <MainCircle />
        <Controler setGameStatus={this.setGameStatus}/>
      </Container>
    );
  }
}

export default App;
