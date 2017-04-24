import React from 'react';
import {Maincircle, Row, FieldStyled} from './MainCircle.styles'
import {colors} from '../../App.styles'

const Field = ({color}) => {
  const divStyle = {
    backgroundColor: color,
  }
  if(color === colors.green){
    divStyle.borderBottom = "12px solid #444";
    divStyle.borderRight = "12px solid #444";
  }  else if (color === colors.red){
    divStyle.borderBottom = "12px solid #444";
    divStyle.borderLeft = "12px solid #444";
  } else if (color === colors.yellow){
    divStyle.borderTop = "12px solid #444";
    divStyle.borderRight = "12px solid #444";
  } else if (color === colors.blue){
    divStyle.borderTop = "12px solid #444";
    divStyle.borderLeft = "12px solid #444";
  }
  return (
    <FieldStyled style={divStyle}>

    </FieldStyled>
  )
}


export const MainCircle = () => {
  return (
    <Maincircle>
      <Row>
        <Field color={colors.green} />
        <Field color={colors.red} />
      </Row>
      <Row>
        <Field color={ colors.yellow } />
        <Field color={ colors.blue } />
      </Row>
    </Maincircle>
    )
}
