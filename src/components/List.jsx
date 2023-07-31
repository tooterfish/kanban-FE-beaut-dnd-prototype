import { useState } from 'react'
import data from '../data'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Task from './Task'

import editIcon from '../assets/edit-box-line.svg'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background: white;
  width: 200px;
  flex-direction: column;
`

const Title = styled.h3`
  margin: 0px;
  padding: 8px;
  border-bottom: 1px solid lightgrey;
  &:hover {
    background-color: whitesmoke;
  }
  &:hover .hidden {
    display: block;
  }
`

const TaskList = styled.div`
  dispay: flex;
  flex-direction: column;
  padding: 4px;
  margin: 4px;
  min-height: 200px;
  background-color: ${props => (props.$isDraggingOver ? 'whitesmoke' : 'white')}
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
  opacity: 20%;
  &:hover {
    opacity: 100%;
    background-color: whitesmoke;
    cursor: pointer;
  }
  display: none;
`


export default function List({listId, taskOrder, index}) {
  const [list, setList] = useState(data.lists[listId])

  return (
    <Draggable draggableId={listId} index={index}>
      {(provided, snapshot) => 
        <Container 
          ref={provided.innerRef}
          $isDraggingOver={snapshot.isDraggingOver} 
          {...provided.draggableProps}
        >
          <Title {...provided.dragHandleProps}>{list.title}
          <ButtonWrapper>
            <Button className="hidden"><img src={editIcon} width='25' height='25'/></Button>
          </ButtonWrapper>
          </Title>
          <Droppable droppableId={listId} type='task'>
            {(provided, snapshot) => 
              <TaskList 
                ref={provided.innerRef}
                $isDraggingOver={snapshot.isDraggingOver} 
                {...provided.droppableProps}
              >
                {taskOrder.map((taskId, i) => <Task key={taskId} taskId={taskId} index={i}/>)}
                {provided.placeholder}
              </TaskList>
            }
          </Droppable>
        </Container>
      }
    </Draggable>
  )
}