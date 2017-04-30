import React from 'react'

import {Switch, SwitchOnOff, OnOffStyled, DisplayBoxDiv, Display, DisplayNumber,
 InlineControlsStyled, Label, StartStrictBtn, ControlerStyled} from './Controler.styles'
 import {colors} from '../../App.styles'

const SwitchBtn = (props) => {
  const {handleSwitchOnOffBtn} = props;
  function handleClick() {
    handleSwitchOnOffBtn()
  }

  return (
    <Switch onClick={handleClick} {...props}>
      <SwitchOnOff />
    </Switch>
  )
}

const OnOffControls = (props) => {
  const {gameOn, handleSwitchOnOffBtn} = props
  return (
    <OnOffStyled>
      <span>OFF</span>
      <SwitchBtn gameOn={gameOn} handleSwitchOnOffBtn={handleSwitchOnOffBtn} />
      <span>ON</span>
    </OnOffStyled>
  )
}

const StartStrictBox = (props) => {
  const {tag, gameOn, start, handleStartBtn, handleStrictBtn} = props
  function handleClick() {
    if(tag === "START" && gameOn && !start) {
      handleStartBtn()
    }
    else if(tag ==="STRICT" && gameOn) {
      handleStrictBtn()
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
  const {count, gameOn, start, strict, handleStartBtn, handleStrictBtn} = props
  return (
    <InlineControlsStyled>
      <DisplayBox count={count} gameOn={gameOn} start={start}/>
      <StartStrictBox gameOn={gameOn} color={colors.red} tag={"START"} handleStartBtn={handleStartBtn} start={start}/>
      <StartStrictBox color={colors.yellow} tag={"STRICT"} gameOn={gameOn} strict={strict} handleStrictBtn={handleStrictBtn}/>
    </InlineControlsStyled>
  )
}

export const Controler = (props) => {
  const { gameOn, count,  start,  strict, handleStartBtn, handleStrictBtn, handleSwitchOnOffBtn } = props
  return (
    <ControlerStyled>
      <h1>Simon<span>®</span></h1>
      <InlineControls count={count} gameOn={gameOn}  start={start} handleStartBtn={handleStartBtn}
      strict={strict} handleStrictBtn={handleStrictBtn} />
      <OnOffControls gameOn={gameOn} handleSwitchOnOffBtn={handleSwitchOnOffBtn}/>
    </ControlerStyled>
  )
}
