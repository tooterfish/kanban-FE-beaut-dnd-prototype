import { useState } from 'react'
import data from '../data'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Task from './Task'

import editIcon from '../assets/edit-box-line.svg'
import HiddenButton from './HiddenButton'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background: white;
  width: 200px;
  flex-direction: column;
  min-height: 80vh;
`

const Title = styled.h3`
  margin: 0px;
  padding: 8px;
  border-bottom: 1px solid lightgrey;
  &:hover {
    background-color: lightgrey;
  }
  &:hover .hidden {
    display: block;
  }
  background-color: ${props => (props.$isDragging ? 'lightgrey' : 'white')}
`

const TaskList = styled.div`
  dispay: flex;
  flex-direction: column;
  padding: 4px;
  margin: 4px;
  min-height: 90vh;
  background-color: ${props => (props.$isDraggingOver ? 'whitesmoke' : 'white')}
`

const hiddenButtonStyleOverride = `
  opacity: 35%;
  &:hover {
    background-color: lightgrey;
  }
`

export default function List({listId, taskOrder, index}) {
  const [list, setList] = useState(data.lists[listId])

  function editList() {
    console.log('edit list ' + listId)
  }

  return (
    <Draggable draggableId={listId} index={index}>
      {(provided, snapshot) => 
        <Container 
          ref={provided.innerRef}
          $isDraggingOver={snapshot.isDraggingOver} 
          {...provided.draggableProps}
        >
          <Title 
            {...provided.dragHandleProps}
            $isDragging={snapshot.isDragging}
          >
            {list.title}
            <HiddenButton icon={editIcon} width={27} height={27} style={hiddenButtonStyleOverride} onClick={editList}/>
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