import { useState } from 'react'
import data from '../data'
import { styled } from 'styled-components'

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
`

export default function Task({taskId}) {
  const [task, setTask] = useState(data.tasks[taskId])

  return (
    <Container>
    {task.content}
    </Container>
  )
}