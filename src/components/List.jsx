import { useState } from 'react'
import data from '../data'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Task from './Task'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
`

const Title = styled.h3`
  padding: 8px;
`

const TaskList = styled.div`
  padding: 8px;
  border: 1px solid black;
`

export default function List({listId, taskOrder, index}) {
  const [list, setList] = useState(data.lists[listId])

  return (
    <Draggable draggableId={listId} index={index}>
      {(provided) => 
        <Container ref={provided.innerRef} {...provided.draggableProps}>
          <Title {...provided.dragHandleProps}>{list.title}</Title>
          <Droppable droppableId={listId} type='task'>
            {(provided) => 
              <TaskList ref={provided.innerRef} {...provided.droppableProps}>
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