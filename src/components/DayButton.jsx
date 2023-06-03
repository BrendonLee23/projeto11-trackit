import { useState } from "react"
import styled from "styled-components"



export default function DayButton(props) {

    const {d, indice} = props 
    const {numHabitos, setNumHabitos} = props
    const [cor, setCor] = useState("#FFFFFF")
    const [corLetra, setCorLetra] = useState("#DBDBDB")

    return(
        <Day 
        corLetra={corLetra}
        cor={cor}
        type="button"
        onClick={cor === "#FFFFFF" && corLetra === "#DBDBDB"? 
        () => {
            setCor("#CFCFCF")
            setCorLetra("#FFFFFF")
            numHabitos.push(indice);
        } : () => {
            setCor("#FFFFFF");
            setCorLetra("#DBDBDB")
            const novoArray = numHabitos.filter((e) => e !== indice);
            setNumHabitos(novoArray);
        }
    }
        >{d}</Day>
    )
}

const Day = styled.button`
        box-sizing: border-box;
        background: ${props => props.cor};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 31px;
        height: 31px;
        margin-bottom: 30px;
        margin-top: 10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${props => props.corLetra};
        cursor: pointer;
`