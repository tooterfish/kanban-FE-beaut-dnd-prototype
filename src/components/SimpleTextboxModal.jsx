import closeIcon from '../assets/close-circle-line.svg'

import styled from 'styled-components'

import { useContext, useState } from 'react'
import { ModalContext } from '../contexts/ModalProvider'

const Container = styled.div`
  position: relative;
  padding: 32px;
  width: 90%;
  max-width: 480px;
  background-color: whitesmoke;

  display: flex;
  flex-direction: column;

  & textarea {
    resize: none;
    width: 26em;
    height: 8em;
  }
`

const CloseButton = styled.button`
  all: unset;
  position: absolute;
  top: -10px;
  right: -10px;
  
  background: url(${closeIcon}) no-repeat;
  background-size: cover;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background-color: whitesmoke;
  color: transparent;

  &:hover {
    cursor: pointer;
  }
`

export default function SimpleTextboxModal({title, placeholder, submitCallback}) {
  const {setContents} = useContext(ModalContext)

  const [text, setText] = useState('')

  function close() {
    setContents('')
  }

  function submit() {
    if (text) {
      setContents('')
      submitCallback(text)
    }
  }

  return (
    <Container>
      <CloseButton onClick={close}>close</CloseButton>
      <label>{title}
        <textarea 
          placeholder={placeholder} 
          value={text} 
          onChange={e => setText(e.target.value)}>
        </textarea>
        <button onClick={submit}>Submit</button>
      </label>
    </Container>
  )
}