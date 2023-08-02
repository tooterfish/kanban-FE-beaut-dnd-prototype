import {styled, keyframes} from 'styled-components'
import { useContext, useState, useEffect } from 'react'
import { ModalContext } from '../contexts/ModalProvider'

// const fadeIn = keyframes`
//   0% { display: none; }
//   50% { opacity: 0; }
//   75% { opacity: 1; }
//   100% { display: flex;}
// `

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  display: ${props => props.$display};

  justify-content: center;
  align-items: center;

  &.shown {
    animation: ${fadeIn} 0.1s linear;
  }

  &.hidden {
    animation: ${fadeOut} 0.2s linear;
  }

  `

export default function Modal() {
  const {contents} = useContext(ModalContext)
  const [display, setDisplay] = useState('none')

  useEffect(() => {
    if (!contents) {
      setTimeout(() => {
        setDisplay('none')
      }, 100)
    } else {
      setDisplay('flex')
    }
  }, [contents])

  return <ModalContainer className={(contents) ? 'shown' : 'hidden'} $display={display}>
    {contents}
  </ModalContainer>
}