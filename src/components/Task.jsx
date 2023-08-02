import data from '../data'

import { useState, useContext } from 'react'
import { styled } from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import { ModalContext } from '../contexts/ModalProvider'

import editIcon from '../assets/edit-box-line.svg'
import HiddenButton from './HiddenButton'
import SimpleTextboxModal from './SimpleTextboxModal'

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
  transition: background-color 0.2s ease;
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
  const {contents, setContents} = useContext(ModalContext)

  function editTask() {
    setContents(<SimpleTextboxModal 
      title={'Edit task'} 
      placeholder={task.content} 
      cb={taskText => setTask({...task, content: taskText})}/>)
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