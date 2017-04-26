import React from 'react'

import {Switch, SwitchOnOff, OnOffStyled, DisplayBoxDiv, Display, DisplayNumber,
 InlineControlsStyled, Label, StartStrictBtn, ControlerStyled} from './Controler.styles'
 import {colors} from '../../App.styles'

const SwitchBtn = (props) => {
  function handleClick() {
    const setGame = props.gameOn === true ? false : true
    const setCount =  props.gameOn === true ? '' : '--';
    props.setGameStatus(setGame, setCount);
  }

  return (
    <Switch onClick={handleClick} {...props}>
      <SwitchOnOff />
    </Switch>
  )
}

const OnOffControls = (props) => {
  return (
    <OnOffStyled>
      <span>OFF</span>
      <SwitchBtn gameOn={props.gameOn} setGameStatus={props.setGameStatus}/>
      <span>ON</span>
    </OnOffStyled>
  )
}

const StartStrictBox = (props) => {
  const {tag, gameOn, setStartGame} = props
  function handleClick() {
    if(tag === "START" && gameOn) {
      // start game to flash and start sequence
      setStartGame();
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
          <DisplayNumber {...props}>{count}</DisplayNumber>
        </Display>
        <Label>COUNT</Label>
      </DisplayBoxDiv>
  )
}

const InlineControls = (props) => {
  const {count, gameOn, setStartGame, start} = props
  return (
    <InlineControlsStyled>
      <DisplayBox count={count} gameOn={gameOn} start={start}/>
      <StartStrictBox gameOn={gameOn} color={colors.red} tag={"START"} setStartGame={setStartGame}/>
      <StartStrictBox color={colors.yellow} tag={"STRICT"}/>
    </InlineControlsStyled>
  )
}

export const Controler = (props) => {
  const {setGameStatus, gameOn, count, setStartGame, start} = props
  return (
    <ControlerStyled>
      <h1>Simon<span>®</span></h1>
      <InlineControls count={count} gameOn={gameOn} setStartGame={setStartGame} start={start}/>
      <OnOffControls setGameStatus={setGameStatus} gameOn={gameOn} />
    </ControlerStyled>
  )
}
