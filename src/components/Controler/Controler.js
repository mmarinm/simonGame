import React from 'react'

import {Switch, SwitchOnOff, OnOffStyled, DisplayBoxDiv, Display,
 InlineControlsStyled, Label, StartStrictBtn, ControlerStyled} from './Controler.styles'
 import {colors} from '../../App.styles'

const SwitchBtn = ({gameOn, setGameStatus}) => {
  function handleClick() {
    const setGame = gameOn === true ? false : true
    const setCount =  gameOn === true ? '' : '--';
    setGameStatus(setGame, setCount);
  }

  const offStyle = {
    backgroundColor: gameOn === false ? "#3193DE" : ""
  }
  const onStyle = {
    backgroundColor: gameOn === true ? "#3193DE" : ""
  }
  return (
    <Switch>
      <SwitchOnOff onClick={handleClick} style={offStyle} > </SwitchOnOff>
      <SwitchOnOff onClick={handleClick} style={onStyle}> </SwitchOnOff>
    </Switch>
  )
}

const OnOffControls = ({setGameStatus, gameOn}) => {
  return (
    <OnOffStyled>
      <span>OFF</span>
      <SwitchBtn gameOn={gameOn} setGameStatus={setGameStatus}/>
      <span>ON</span>
    </OnOffStyled>
  )
}

const StartStrictBox = ({color, tag}) => {

  const divStyle = {
    backgroundColor: color
  }

  return (
    <DisplayBoxDiv>
      <StartStrictBtn style={divStyle} />
      <Label>{tag}</Label>
    </DisplayBoxDiv>
  )
}

const DisplayBox = ({count}) => {

  return (
      <DisplayBoxDiv>
        <Display>{count}</Display>
        <Label>COUNT</Label>
      </DisplayBoxDiv>
  )
}

const InlineControls = ({count}) => {

  return (
    <InlineControlsStyled>
      <DisplayBox count={count} />
      <StartStrictBox color={colors.red} tag={"START"}/>
      <StartStrictBox color={colors.yellow} tag={"STRICT"}/>
    </InlineControlsStyled>
  )
}

export const Controler = ({setGameStatus, gameOn, count}) => {

  return (
    <ControlerStyled>
      <h1>Simon<span>®</span></h1>
      <InlineControls count={count} />
      <OnOffControls setGameStatus={setGameStatus} gameOn={gameOn} />
    </ControlerStyled>
  )
}
