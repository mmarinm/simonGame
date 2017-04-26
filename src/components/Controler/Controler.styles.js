import styled, { keyframes } from 'styled-components'

const flash = keyframes`
   0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }


  100% {
    opacity: 1;
  }
`;

export const ControlerStyled = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: #ECE7EE;
  height: 200px;
  width: 200px;
  border: 12px solid #444;
  text-align:center;
`

export const InlineControlsStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const DisplayBoxDiv = styled.div`
  width: 60px;
`

export const Label = styled.h3`
  color: #222;
  font-size: 0.7em;
  margin-top: 5px;
  margin-bottom: 0;
`

export const Display = styled.div`
  background-color: #32050C;
  color: #DC0A16;
  border: 3px solid #444;
  border-radius: 20%;
  margin: 0;
  height: 35px;
`

export const DisplayNumber = styled.h1`
  margin: 0;
  padding: 0;
  animation: ${
  (props) => props.gameOn && props.count === "--" && props.start ? flash : ""
} 2s 2;
`

export const StartStrictBtn = styled.div`
  border-radius: 50%
  cursor:pointer;
  width: 28px;
  height: 28px;
  border: 4px solid #444;
  margin: 5px auto 0 auto;
  background-color: ${
    (props) => props.color
  }
`

export const OnOffStyled = styled.div`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;

`
export const Switch = styled.div`
  height: 20px;
  width: 40px;
  background-color: #222;
  border-radius: 2px;
  cursor: pointer;
  margin: 0 10px;
  display: flex;
  flex-direction: ${(props) => props.gameOn ? "row-reverse" : "row"}
`

export const SwitchOnOff = styled.div`
  width: 45%;
  height: 80%;
  border: 2px solid #333;
  background-color: #3193DE;
  };
`
