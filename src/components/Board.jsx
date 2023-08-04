import data from '../data'
import styled from 'styled-components'
import { v4 } from 'uuid'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import List from './List'

import { useState, useContext } from 'react'
import { ModalContext } from '../contexts/ModalProvider'
import SimpleTextboxModal from './SimpleTextboxModal'
import AddListButton from './AddListButton'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

export default function Board() {
  const {contents, setContents} = useContext(ModalContext)
  const [listOrder, setListOrder] = useState(data.listOrder)
  const [taskOrders, setTaskOrders] = useState(data.taskOrders)
  
  function onDragEnd(result) {

    const { type, draggableId, source, destination } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) {
          return
    }

    if (type === 'task') {
      const newTaskOrders = {...taskOrders}
      
      newTaskOrders[source.droppableId].splice(source.index, 1)
      newTaskOrders[destination.droppableId].splice(destination.index, 0, draggableId)

      setTaskOrders(newTaskOrders)
    }

    if (type === 'list') {
      const newListOrder = [...listOrder]

      newListOrder.splice(source.index, 1)
      newListOrder.splice(destination.index, 0, draggableId)

      setListOrder(newListOrder)
    }

  }

  function addNewList() {
    setContents(<SimpleTextboxModal 
      title={'Add list'} 
      placeholder={'Enter new list'} 
      submitCallback={newListText => {
        const newId = v4()
        
        //add new list to data
        data.lists[newId] = { id: newId, title: newListText }
        console.log(data.lists)

        //add new list ID to task orders
        const newTaskOrders = {...taskOrders}
        newTaskOrders[newId] = []
        setTaskOrders(newTaskOrders)

        //add new list ID to list orders
        const newListOrder = [...listOrder]
        newListOrder.push(newId)
        setListOrder(newListOrder)
      }
    }/>)
  }

  return (
    <>
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='lists' type='list' direction='horizontal'>
        {(provided) => 
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {listOrder.map((listId, i) => { 
              return <List 
                key={listId} 
                listId={listId} 
                taskOrder={taskOrders[listId]} 
                setTaskOrders={setTaskOrders}
                index={i}/>})
            }
            {provided.placeholder}
            <AddListButton onClick={addNewList}/>
          </Container>
        }
      </Droppable>
    </DragDropContext>
    </>
  )
}