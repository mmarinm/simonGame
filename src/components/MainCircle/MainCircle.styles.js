import styled from 'styled-components'

export const Maincircle = styled.div`
  border-radius: 50%;
  width: 460px;
  height: 460px;
  border: 24px solid #444;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  `
  export const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
  `
  export const FieldStyled = styled.div`
    width: 50%;
    background-color: ${(props) => props.color}
    border-${(props) => props.borderRight}: 12px solid #444
    border-${(props) => props.borderBottom}: 12px solid #444
    border-${(props) => props.borderLeft}: 12px solid #444
    border-${(props) => props.borderTop}: 12px solid #444
  `
