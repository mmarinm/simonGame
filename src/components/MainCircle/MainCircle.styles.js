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
    border-${(props) =>
      props.border }: 12px solid #444;
  `
  export const Column = styled.div`
    background-color: red;
    width: 50%;
    border-${(props) =>
      props.border }: 12px solid #444;
  `

  export const FieldStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props)=> props.color };
    cursor: ${(props)=> props.compTurn ? "auto" : "pointer"  };
  `
