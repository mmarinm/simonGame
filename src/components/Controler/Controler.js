import React from 'react'

import {Switch, SwitchOnOff, OnOffStyled, DisplayBoxDiv, Display,
 InlineControlsStyled, Label, StartStrictBtn, ControlerStyled} from './Controler.styles'
 import {colors} from '../../App.styles'

const SwitchBtn = ({gameOn}) => {
  console.log(gameOn)
  const offStyle = {
    backgroundColor: gameOn === false ? "#3193DE" : ""
  }
  const onStyle = {
    backgroundColor: gameOn === true ? "#3193DE" : ""
  }
  return (
    <Switch>
      <SwitchOnOff className="of" style={offStyle}> </SwitchOnOff>
      <SwitchOnOff className="on" style={onStyle}> </SwitchOnOff>
    </Switch>
  )
}

const OnOffControles = () => {
  return (
    <OnOffStyled>
      <span>OFF</span>
      <SwitchBtn gameOn={false}/>
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

const DisplayBox = () => {
  return (
      <DisplayBoxDiv>
        <Display>15</Display>
        <Label>COUNT</Label>
      </DisplayBoxDiv>
  )
}

const InlineControles = () => {
  return (
    <InlineControlsStyled>
      <DisplayBox />
      <StartStrictBox color={colors.red} tag={"START"}/>
      <StartStrictBox color={colors.yellow} tag={"STRICT"}/>
    </InlineControlsStyled>
  )
}

export const Controler = ({props}) => {
  console.log(props);
  return (
    <ControlerStyled>
      <h1>Simon<span>®</span></h1>
      <InlineControles />
      <OnOffControles />
    </ControlerStyled>
  )
}
