import { useState } from 'react'
import data from '../data'
import { styled } from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

import editIcon from '../assets/edit-box-line.svg'
import HiddenButton from './HiddenButton'

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
  &:hover {
    background-color: whitesmoke;
  }
  &:hover .hidden {
    display: block;
  }
  background-color: ${props => (props.$isDragging ? 'whitesmoke' : 'white')}
`

export default function Task({taskId, index}) {
  const [task, setTask] = useState(data.tasks[taskId])

  function editTask(e) {
    console.log('edit task ' + taskId)
  }

  return (
    <Draggable draggableId={taskId} index={index}>
      {(provided, snapshot) => 
        <Container 
          ref={provided.innerRef}
          $isDragging={snapshot.isDragging}
          {...provided.draggableProps} 
          {...provided.dragHandleProps}
        >
          {task.content}
          <HiddenButton icon={editIcon} width={25} height={25} onClick={editTask}/>
        </Container>
      }
    </Draggable>
  )
}