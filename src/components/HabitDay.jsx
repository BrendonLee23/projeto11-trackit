import styled from "styled-components"

import Check from "../imagens/check.svg"
import { useState } from "react"


export default function HabitDay(props) {
    const {setMark } = props;
    const [corImg, setCorImg] = useState("#ebebeb");
    const [corTexto, setCorTexto] = useState("#666666");
    const [sequencia, setSequencia] = useState(props.sequencia);
    const [record, setRecord] = useState(props.record);

    const texto1 = (
        <span style={{ color: corTexto }}>{`${sequencia} dias`}</span>
    );
    const texto2 = (
        <span style={{ color: corTexto }}>{`${record} dias`}</span>
    );

    function marcarHabito() {
        if(corImg === "#ebebeb"){
            setCorImg("#8FC549")
            setCorTexto("#8FC549")
            setSequencia(prevSequencia => prevSequencia + 1)
            setRecord(prevRecord => prevRecord + 1)
            setMark((prevMark) => prevMark + 1);
        }else{
            setCorImg("#ebebeb")
            setCorTexto("#ebebeb")
            setSequencia(prevSequencia => prevSequencia - 1)
            setRecord(prevRecord => prevRecord - 1)
            setMark((prevMark) => prevMark - 1);
        }
    }


    return (
        <Habito>
            <DivInfos>
                <h1>{props.nome}</h1>
                <h2>Sequência atual: {texto1}</h2>
                <h3>Seu recorde: {texto2}</h3>
            </DivInfos>
            <img
                style={{ backgroundColor: corImg }}
                onClick={marcarHabito}
                src={Check}
                alt="check-img"
            />
        </Habito>
    );
}



const Habito = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    width: 340px;
    height: 94px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 7px;
    img{
        width: 69px;
        height: 69px;
        background: ${(props) => { props.corImg }};
        border: 1px solid #E7E7E7;
        border-radius: 5px;
    }

`
const DivInfos = styled.div`
    height: 65px;
    width: 230px;
    h1{
        font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    }h2{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    }h3{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
`