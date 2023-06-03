import styled from "styled-components"
import DaySelecteds from "./DaySelecteds"

export default function MeuHabito(props) {

    const {arrayDays, setArrayDays, dias} = props
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]

    return (
        <ContainerHabito>
            <h1>{props.nome}</h1>
            <GrupoDias>
                {weekdays.map((day, indice ) => <DaySelecteds i={indice} dias={dias}  arrayDays={arrayDays} setArrayDays={setArrayDays} dia={day} key={indice} disabled /> )}
            </GrupoDias>
        </ContainerHabito>
    )
}

const ContainerHabito = styled.div`
    width: 345px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 12px;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color:  #666666;
    }
`
const GrupoDias = styled.div`
    display: flex;
    gap: 8px;
`