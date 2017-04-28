import React from 'react'

import {Switch, SwitchOnOff, OnOffStyled, DisplayBoxDiv, Display, DisplayNumber,
 InlineControlsStyled, Label, StartStrictBtn, ControlerStyled} from './Controler.styles'
 import {colors} from '../../App.styles'

const SwitchBtn = (props) => {
  const {gameOn, setStrictMode, setGameStatus, strict, restartGame} = props
  function handleClick() {
    if(!gameOn){
      setGameStatus(!gameOn, "--");
    }
    // if strict is on and you switch the OFF button
    else if(gameOn && strict) {
      setStrictMode()
    }
    if(gameOn){
      restartGame();
    }
  }

  return (
    <Switch onClick={handleClick} {...props}>
      <SwitchOnOff />
    </Switch>
  )
}

const OnOffControls = (props) => {
  const {gameOn, setGameStatus, setStrictMode, strict, restartGame} = props
  return (
    <OnOffStyled>
      <span>OFF</span>
      <SwitchBtn gameOn={gameOn} setGameStatus={setGameStatus} setStrictMode={setStrictMode}
      strict={strict} restartGame={restartGame}/>
      <span>ON</span>
    </OnOffStyled>
  )
}

const StartStrictBox = (props) => {
  const {tag, gameOn, setStartGame, setStrictMode, generateSequence} = props
  function handleClick() {
    if(tag === "START" && gameOn) {
      // start game to flash and start sequence
      setStartGame();
      //wait for the flash to finish and start with the sequence
      setTimeout(function () {
        generateSequence()
      }, 2000);
    }
    else if(tag ==="STRICT" && gameOn) {
      setStrictMode()
    }
  }

  return (
    <DisplayBoxDiv>
      <StartStrictBtn onClick={handleClick} {...props} />
      <Label>{tag}</Label>
    </DisplayBoxDiv>
  )
}

const DisplayBox = (props) => {
  const {count} = props
  return (
      <DisplayBoxDiv>
        <Display >
          <DisplayNumber {...props}>{count === "--" ? count : count < 10 ? "0" + count : "1" + count }</DisplayNumber>
        </Display>
        <Label>COUNT</Label>
      </DisplayBoxDiv>
  )
}

const InlineControls = (props) => {
  const {count, gameOn, setStartGame, start, setStrictMode, strict, generateSequence} = props
  return (
    <InlineControlsStyled>
      <DisplayBox count={count} gameOn={gameOn} start={start}/>
      <StartStrictBox gameOn={gameOn} color={colors.red} tag={"START"} setStartGame={setStartGame} generateSequence={generateSequence}/>
      <StartStrictBox color={colors.yellow} tag={"STRICT"} setStrictMode={setStrictMode} gameOn={gameOn} strict={strict}/>
    </InlineControlsStyled>
  )
}

export const Controler = (props) => {
  const {setGameStatus, gameOn, count, setStartGame, start, setStrictMode, strict, generateSequence,
  restartGame } = props
  return (
    <ControlerStyled>
      <h1>Simon<span>®</span></h1>
      <InlineControls count={count} gameOn={gameOn} setStartGame={setStartGame} start={start}
      setStrictMode={setStrictMode} strict={strict} generateSequence={generateSequence}/>
      <OnOffControls setGameStatus={setGameStatus} gameOn={gameOn} setStrictMode={setStrictMode}  strict={strict} restartGame={restartGame}/>
    </ControlerStyled>
  )
}
