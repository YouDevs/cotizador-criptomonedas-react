import { useState,useEffect } from 'react'
import styled from '@emotion/styled'
// Importa custom hook:
import useSelectMonedas from '../hooks/useSelectMonedas'
import {monedas} from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }

`

const Formulario = () => {

    const [criptos, setCriptos] = useState([])
    // Extrae mi custom hook:
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)

    useEffect(() => {

        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`

            const respuesta = await fetch(url)
            // console.log(respuesta)
            const resultado = await respuesta.json()
            // console.log(resultado.Data)

            const arrayCriptos = resultado.Data.map(cripto => {
                // console.log(cripto.CoinInfo)
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    name: cripto.CoinInfo.FullName,
                }
                return objeto
            })

            setCriptos(arrayCriptos)

        }

        consultarAPI()
    }, [])

  return (
    <form>
        {/* Manda llamar como componente mi custom hook */}
        <SelectMonedas />
        {moneda}
        <InputSubmit
            type="submit"
            value="Cotizar"

        />
    </form>
  )
}

export default Formulario