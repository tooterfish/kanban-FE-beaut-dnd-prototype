import { useState } from 'react'
import data from '../data'
import { styled } from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

import editIcon from '../assets/edit-box-line.svg'

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
  &:hover {
    background-color: whitesmoke;
  }
  background-color: ${props => (props.isDragging ? 'whitesmoke' : 'white')}

`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  all: unset;
  width: 20px;
  height: 20px;
  position: fixed;
  transform: translate(0px, -22px);
  opacity: 15%;
  &:hover {
    opacity: 100%;
    background-color: whitesmoke;
    cursor: pointer;
  }

`

export default function Task({taskId, index}) {
  const [task, setTask] = useState(data.tasks[taskId])

  return (
    <Draggable draggableId={taskId} index={index}>
      {(provided, snapshot) => 
        <Container 
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps} 
          {...provided.dragHandleProps}
        >
          {task.content}
          <ButtonWrapper>
            <Button><img src={editIcon} width='25' height='25'/></Button>
          </ButtonWrapper>
        </Container>
      }
    </Draggable>
  )
}