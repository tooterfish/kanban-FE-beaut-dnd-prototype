import { useState } from 'react'
import data from '../data'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Task from './Task'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background: white;
  width: 200px;
  flex-direction: column;
`

const Title = styled.h3`
  margin: 0px;
  margin-top: 4px;
  padding: 8px;
  border-bottom: 1px solid lightgrey;
`

const TaskList = styled.div`
  dispay: flex;
  flex-direction: column;
  padding: 4px;
  margin: 4px;
  min-height: 200px;
  background-color: ${props => (props.$isDraggingOver ? 'whitesmoke' : 'white')}
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
          <Title {...provided.dragHandleProps}>{list.title}</Title>
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