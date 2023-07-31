import { styled } from "styled-components"

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  all: unset;
  position: fixed;
  transform: translate(4px, -22px);
  opacity: 20%;
  &:hover {
    opacity: 100%;
    background-color: whitesmoke;
    cursor: pointer;
  }
  display: none;
  ${props => props.$style}
`

export default function HiddenButton({icon, width, height, style = ``, onClick}) {
  return (
  <ButtonWrapper>
    <Button className="hidden" $style={style}><img src={icon} width={width} height={height} onClick={onClick}/></Button>
  </ButtonWrapper>
  )
}