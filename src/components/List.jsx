import { useState } from 'react'
import data from '../data'
import styled from 'styled-components'
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
`

export default function List({listId}) {
  const [list, setList] = useState(data.lists[listId])

  return (
    <Container>
      <Title>{list.title}</Title>
      <TaskList>
        {list.taskOrder.map((taskId) => { return <Task key={taskId} taskId={taskId}/>})}
      </TaskList>
    </Container>
  )
}