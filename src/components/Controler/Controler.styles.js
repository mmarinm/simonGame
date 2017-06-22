import styled, { keyframes } from 'styled-components'
import media from '../theme/media'

const blink = keyframes`
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
  height: 220px;
  width: 220px;
  border: 12px solid #444;
  text-align:center;

  ${media.phone`
    height: 170px;
    width: 170px;
  `}
`
export const ControlerHeader = styled.h1`
  font-family: 'Alfa Slab One', cursive;
  color : #222;
  font-size: 3.2em;
  margin: 15px 0 5px 0;

  ${media.phone`
    font-size: 2.2em;
    margin: 10px 0 5px 0;
  `}

`
export const ControlerSpan = styled.span`
  font-size: 0.4em;
  position: absolute;
  top: 27px;
  left: 175px;
  
  ${media.phone`
    left: 135px;
    top: 20px;
  `}
`

export const InlineControlsStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${media.phone`
    width: 90%;
    margin: 0 auto;
  `}
`
export const DisplayBoxDiv = styled.div`
  width: 60px;
`

export const Label = styled.h3`
  font-family: 'Norican', cursive;
  color: #222;
  margin-top: 5px;
  margin-bottom: 0;
  font-size: 0.8em;
`

export const Display = styled.div`
  background-color: #32050C;
  color: #DC0A16;
  border: 3px solid #444;
  border-radius: 20%;
  font-size: 0.8em;
  height: 35px;
  width: 50px;
`

export const DisplayNumber = styled.h1`
  display: ${(props) => !props.gameOn ? "none" : "block"}
  margin-top: 5px;
  padding: 0;
  animation: ${
  (props) => props.count === "!!!"  || (props.gameOn && props.count === "--" && props.start) ? blink : ""
} 1s 2;
`

export const StartStrictBtn = styled.div`
  border-radius: 50%
  cursor:pointer;
  width: 28px;
  height: 28px;
  border: 4px solid ${
    (props) => props.strict ? "red" : "#444"
  }
  margin: 5px auto 0 auto;
  background-color: ${
    (props) => props.color
  }
`

export const OnOffStyled = styled.div`
  height: 45px;
  margin-top: 5px;
  font-family: 'Norican', cursive;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.phone`
    width: 75%;
    height: 27px;
    margin: 0 auto;
  `}
`
export const Switch = styled.div`
  height: 20px;
  width: 40px;
  background-color: #222;
  border-radius: 2px;
  cursor: pointer;
  margin: 0 10px;
  display: flex;
  flex-direction: ${(props) => props.gameOn ? "row-reverse" : "row"};

  ${media.phone`
    margin: 0 5px;
  `}
`

export const SwitchOnOff = styled.div`
  width: 45%;
  height: 80%;
  border: 2px solid #333;
  background-color: #3193DE;
  };
`
