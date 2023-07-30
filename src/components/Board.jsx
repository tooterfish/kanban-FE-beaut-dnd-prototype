import data from '../data'
import styled from 'styled-components'
import List from './List'

import { useState } from 'react'

const Container = styled.div`
  display: flex;
`

export default function Board() {
  const [listOrder, setListOrder] = useState(data.listOrder)
  
  return (
    <Container>
      {listOrder.map((listId, i) => { return <List key={listId} listId={listId}/>})}
    </Container>
  )
}