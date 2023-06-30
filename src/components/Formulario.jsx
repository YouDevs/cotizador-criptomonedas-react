import styled from '@emotion/styled'
// Importa custom hook:
import useSelectMonedas from '../hooks/useSelectMonedas'

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

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }

`

const Formulario = () => {

    // Extrae mi custom hook:
    const [SelectMonedas] = useSelectMonedas('Eligen tu moneda')
    const [SelectCriptomonedas] = useSelectMonedas('Eligen tu criptomoneda')

    // Manda a llamar como función a mi custom hook:
    // SelectMonedas()

  return (
    <form>
        {/* Manda llamar como componente mi custom hook */}
        <SelectMonedas />
        <SelectCriptomonedas />
        <InputSubmit
            type="submit"
            value="Cotizar"

        />
    </form>
  )
}

export default Formulario