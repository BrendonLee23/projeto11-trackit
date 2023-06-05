
import styled from "styled-components"
import UserContext from "../contexts/UserContext"
import { useContext, useState } from "react"
import axios from "axios"
// import { Navigate } from "react-router-dom"
import DayButton from "./DayButton"


export default function NovoHabito(props) {

    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]

    const { user } = useContext(UserContext)
    const [nomeHabito, setNomeHabito] = useState("")
    const [numHabitos, setNumHabitos] = useState([])
    const { setHabito, setArrayHabitos } = props
    // const [isHidden, setIsHidden] = useState(false)


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
                cancelarHabito()
                axios
                    .get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,
                        config)
                    .then((resposta) => {
                        console.log(resposta.data);
                        setArrayHabitos(resposta.data);
                    })
                    .catch((error) => {
                        console.log("Erro!", error);
                    });
            })
            .catch((error) => {
                console.log("ERRO AO SALVAR HABITO", error);
            })
    }

    function cancelarHabito() {
        setHabito(false)
        // setIsHidden(true)
    }
    // if (isHidden) {
    //     return null; // Retorna null se o componente estiver oculto
    // }

    return (
        <>
            <ContainerForm onSubmit={criarHabito}>
                <div>
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
                        <p onClick={cancelarHabito}> Cancelar</p>
                        <button>Salvar</button>
                    </CancelSave>
                </div>
            </ContainerForm>
        </>
    )
}


const ContainerForm = styled.form`
    display: flex;
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
        font-size: 16.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
        cursor: pointer;
        &:hover {
    color: #ff0000; 
    transition: 0.5s;
    opacity: 0.7;
    }
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
    }button:hover{
    -webkit-transform: scale(1.5);
    transform: scale(1.1);
    }
    
`
