import { useState, useContext } from 'react'
import data from '../data'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { ModalContext } from '../contexts/ModalProvider'
import { v4 } from 'uuid'

import editIcon from '../assets/edit-box-line.svg'
import HiddenButton from './HiddenButton'
import SimpleTextboxModal from './SimpleTextboxModal'
import Task from './Task'
import AddButton from './AddButton'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background: white;
  width: 200px;

  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  margin: 0px;
  padding: 8px;
  border-bottom: 1px solid lightgrey;
  transition: background-color 0.2s ease;
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
  padding: 4px;
  margin: 4px;
  flex-grow: 1;
  background-color: ${props => (props.$isDraggingOver ? 'whitesmoke' : 'white')}
`

const hiddenButtonStyleOverride = `
  transition: 0.2s ease;
  opacity: 35%;
  &:hover {
    background-color: lightgrey;
  }
`

export default function List({listId, taskOrder, setTaskOrders, index}) {
  const [list, setList] = useState(data.lists[listId])
  const {contents, setContents} = useContext(ModalContext)

  function editList() {
    setContents(<SimpleTextboxModal 
      title={'Edit list title'} 
      placeholder={list.title} 
      submitCallback={listText => {
        const newList = {...list, title: listText}
        setList(newList) //update app
        data.lists[listId] = newList //"persist" data here
      }
    }/>)
  }

  function addNewTask() {
    setContents(<SimpleTextboxModal 
      title={'Add task'} 
      placeholder={'Enter new task'} 
      submitCallback={newTaskText => {
        const newId = v4()
        data.tasks[newId] = { id: newId, content: newTaskText }

        setTaskOrders((oldTaskOrders) => {
          const newTaskOrder = [...taskOrder]
          newTaskOrder.push(newId)
          console.log(newTaskOrder)
          const newTaskOrders = {...oldTaskOrders}
          newTaskOrders[listId] = newTaskOrder
          console.log(newTaskOrders)
          return newTaskOrders
        })
      }
    }/>)
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
                <AddButton text={'+ Add a task'} onClick={addNewTask}/>
              </TaskList>
            }
          </Droppable>
        </Container>
      }
    </Draggable>
  )
}