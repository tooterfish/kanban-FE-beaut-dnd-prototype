import data from '../data'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import List from './List'

import { useState } from 'react'

const Container = styled.div`
  display: flex;
`

export default function Board() {
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

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='board' type='list'>
        {(provided) => 
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {listOrder.map((listId, i) => { return <List key={listId} listId={listId} taskOrder={taskOrders[listId]} index={i}/>})}
          </Container>
        }
      </Droppable>
    </DragDropContext>
  )
}