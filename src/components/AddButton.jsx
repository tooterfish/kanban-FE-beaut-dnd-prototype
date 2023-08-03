import styled from 'styled-components'

const Button = styled.button`
  all: unset;
  padding: 8px;
  width: 90%;

  transition: 0.2s ease;

  &:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
`

export default function AddButton({text, onClick}) {
  return <Button onClick={onClick}>{text}</Button>
}