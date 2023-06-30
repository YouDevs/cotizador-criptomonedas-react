
import styled from '@emotion/styled'

const Label = styled.label`
    color: white;
`

const useSelectMonedas = (label) => {
    const SelectMonedas = () => (
        <>
            <Label htmlFor="">{label}</Label>
        </>
    )

    return [SelectMonedas]
}

export default useSelectMonedas