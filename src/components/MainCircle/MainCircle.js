import React from 'react';
import {Maincircle, Row, FieldStyled} from './MainCircle.styles'
import {colors} from '../../App.styles'

const Field = (props) => {
  return (
    <FieldStyled {...props} />
  )
}


export const MainCircle = () => {
  return (
    <Maincircle>
      <Row>
        <Field color={colors.green} borderRight="right" borderBottom="bottom"/>
        <Field color={colors.red} borderLeft="left" borderBottom="bottom"/>
      </Row>
      <Row>
        <Field color={ colors.yellow } borderRight="right" borderTop="top"/>
        <Field color={ colors.blue } borderLeft="left" borderTop="top"/>
      </Row>
    </Maincircle>
    )
}
