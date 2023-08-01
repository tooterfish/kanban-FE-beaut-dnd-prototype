import styled from 'styled-components'
import { useContext } from 'react'
import { ModalContext } from '../contexts/ModalProvider'

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContent = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  background-color: whitesmoke;
`

export default function Modal() {
  const {contents, setContents} = useContext(ModalContext)

  return (contents) ? (
    <ModalContainer>
      <ModalContent>
        {contents}
      </ModalContent>
    </ModalContainer>
  )
  : ''
}