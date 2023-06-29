import { useState } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%
  margin: 100px auto 0 auto;
  display: block;
`

// Crea un componente estilizado para un h1:
const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #55A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }

`

function App() {

  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt='Imagenes criptomonedas'
      />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
      </div>
    </Contenedor>
  )
}

export default App
