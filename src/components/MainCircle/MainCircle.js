import React from 'react';
import {Maincircle, Row, Column, FieldStyled} from './MainCircle.styles'
import {colors} from '../../App.styles'

export const MainCircle = (props) => {
  const {setFieldState, field1, field2, field3, field4} = props
  function handleClick(val){
    console.log(val);
    setFieldState(val)
    setTimeout(function () {
      setFieldState(val)
    }, 500);
  }

  function renderField(val, props, color){
    return <FieldStyled onClick={() => handleClick(val)} {...props} color={color}/>
  }

  return (
    <Maincircle>
      <Row border="bottom">
        <Column border="right">
          {renderField(0, props, field1 ? colors.activeGreen : colors.green)}
        </Column>
        <Column border="left">
          {renderField(1, props, field2 ? colors.activeRed : colors.red)}
        </Column>
      </Row>
      <Row border="top">
        <Column border="right">
          {renderField(2, props, field3 ? colors.activeYellow : colors.yellow)}
        </Column>
        <Column border="left">
          {renderField(3, props, field4 ? colors.activeBlue : colors.blue)}
        </Column>
      </Row>
    </Maincircle>
    )
}
