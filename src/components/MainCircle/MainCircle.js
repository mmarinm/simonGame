import React from 'react';
import {Maincircle, Row, Column, FieldStyled} from './MainCircle.styles'
import {colors} from '../../App.styles'

export const MainCircle = (props) => {
  const {field1, field2, field3, field4, handleFieldBtn, showing} = props
  function handleClick(val){
    if(!showing && field1 === false && field2 === false && field3 === false && field4 === false) {
      handleFieldBtn(val);
    }
  }

  function renderField(val, props, color, animate){
    return <FieldStyled onClick={() => handleClick(val)} {...props} color={color} animate={animate}/>
  }

  return (
    <Maincircle>
      <Row border="bottom">
        <Column border="right">
          {renderField(0, props, colors.green, field1)}
        </Column>
        <Column border="left">
          {renderField(1, props, colors.red, field2)}
        </Column>
      </Row>
      <Row border="top">
        <Column border="right">
          {renderField(2, props, colors.yellow, field3)}
        </Column>
        <Column border="left">
          {renderField(3, props, colors.blue, field4)}
        </Column>
      </Row>
    </Maincircle>
    )
}
