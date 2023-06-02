
import styled from "styled-components"
import UserContext from "../contexts/UserContext"
import { useContext, useState } from "react"
import axios from "axios"
import { Navigate } from "react-router-dom"
import DayButton from "./DayButton"


export default function NovoHabito(props) {

    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]

    const { user } = useContext(UserContext)
    const [nomeHabito, setNomeHabito] = useState("")
    const [numHabitos, setNumHabitos] = useState([])
    const {setHabito} = props


    function criarHabito(event) {
        event.preventDefault();

        const habitInfos =
        {
            name: nomeHabito,
            days: numHabitos
        }

        const config = {
            headers: {
                Authorization: `Bearer ${user}`,
            },
        };

        axios
            .post(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
                habitInfos,
                config
            )
            .then((response) => {
                console.log("O HABITO FOI SALVO", response);
                Navigate("/day");
            })
            .catch((error) => {
                console.log("ERRO AO SALVAR HABITO", error);
                alert("Tente novamente.");

            })
    }

    function cancelarHabito(){
        setHabito(false)
    }


    return (
        <>
            <ContainerForm onSubmit={criarHabito}>
                <input
                    value={nomeHabito}
                    onChange={(e) => setNomeHabito(e.target.value)}
                    required
                    type="text"
                    placeholder="nome do hábito"
                />
                <CheckDays>
                    {weekdays.map((d, indice) => <DayButton numHabitos={numHabitos} setNumHabitos={setNumHabitos} key={indice} d={d} indice={indice} />)}
                </CheckDays>
                <CancelSave>
                    <p onClick={cancelarHabito}> Cancel</p>
                    <button>Salvar</button>
                </CancelSave>
            </ContainerForm>
        </>
    )
}


const ContainerForm = styled.form`
    width: 345px;
    height: 180px;
    left: 17px;
    top: 147px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    margin-top: 10px;
    input{
        width: 303px;
        height: 45px;
        left: 36px;
        top: 279px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #474747;
        padding-left: 10px;
    }
`

const CheckDays = styled.div`
    display: flex;
    gap: 5px;
    `

const CancelSave = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 15px;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
        cursor: pointer;
    }button{
        background: #52B6FF;
        border: #1572b4;
        border-radius: 4.63636px;
        width: 84px;
        height: 35px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
        cursor: pointer;
    }
`