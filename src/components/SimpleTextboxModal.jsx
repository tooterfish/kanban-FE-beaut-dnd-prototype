import styled from 'styled-components'

import { useContext, useState } from 'react'
import { ModalContext } from '../contexts/ModalProvider'

const Container = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  background-color: whitesmoke;
`

export default function SimpleTextboxModal({title, placeholder, cb}) {
  const {setContents} = useContext(ModalContext)

  function close() {
    setContents('')
    cb('output')
  }

  return (
    <Container>
      <h4>{title}</h4>
      <input placeholder={placeholder}></input>
      <button onClick={close}>close</button>
    </Container>
  )
}