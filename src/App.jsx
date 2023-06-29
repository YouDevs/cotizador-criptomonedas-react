import { useState } from 'react'
import styled from '@emotion/styled'

// Crea un componente estilizado para un h1:
const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
`

function App() {

  return (
    <Heading>Desde App</Heading>
  )
}

export default App
