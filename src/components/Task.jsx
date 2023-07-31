import { useState } from 'react'
import data from '../data'
import { styled } from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  background: white;
`

export default function Task({taskId, index}) {
  const [task, setTask] = useState(data.tasks[taskId])

  return (
    <Draggable draggableId={taskId} index={index}>
      {(provided) => 
        <Container ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        {task.content}
        </Container>
      }
    </Draggable>
  )
}