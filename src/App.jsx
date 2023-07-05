import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

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

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if(Object.keys(monedas).length > 0) {
      const contizarCripto = async () => {
        setCargando(true)
        setResultado({})
        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        // console.log(resultado.DISPLAY[criptomoneda][moneda])
        setResultado(resultado.DISPLAY[criptomoneda][moneda])
        setCargando(false)
      }
      contizarCripto()
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt='Imagenes criptomonedas'
      />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario setMonedas={setMonedas} />

        {/* Se muestra el componente unicamente cuando ya hay alguna cotización */}
        {cargando && <Spinner />}
        { resultado.PRICE && <Resultado resultado={resultado} /> }

      </div>
    </Contenedor>
  )
}

export default App
