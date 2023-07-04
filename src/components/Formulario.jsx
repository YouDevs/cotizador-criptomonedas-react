import { useState,useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
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
    const [error, setError] = useState(false)
    // Extrae mi custom hook:
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu criptomoneda', criptos)

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
                    nombre: cripto.CoinInfo.FullName,
                }
                return objeto
            })

            setCriptos(arrayCriptos)

        }

        consultarAPI()
    }, [])


    const handleSubmit = e => {
        e.preventDefault();
        console.log("Estamos enviando el form")

        if([moneda, criptomoneda].includes('')) {
            setError(true)
            return
        }

        setError(false)

    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>	}
            <form
                onSubmit={handleSubmit}
            >
                {/* Manda llamar como componente mi custom hook */}
                <SelectMonedas />
                <SelectCriptomoneda />
                <InputSubmit
                    type="submit"
                    value="Cotizar"

                />
            </form>
        </>
    )
}

export default Formulario