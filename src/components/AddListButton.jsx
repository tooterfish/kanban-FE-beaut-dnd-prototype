import styled from 'styled-components'

const Button = styled.button`
  all: unset;
  padding: 8px;
  width: 90%;

  transition: 0.2s ease;

  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`
//render the button inside an empty "dummy" list
const DummyList = styled.div`
  margin: 8px;
  background: transparent;
  width: 200px;

  display: flex;
  flex-direction: column;
`

export default function AddListButton({onClick}) {
  return (
    <DummyList>
      <Button onClick={onClick}>+ Add a list</Button>
    </DummyList>
  )
}