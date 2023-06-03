import styled from "styled-components"
import DaySelecteds from "./DaySelecteds"
import Delete from "../imagens/delete.svg"
import axios from "axios"
import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import { useNavigate } from "react-router-dom"

export default function MeuHabito(props) {
    const { user } = useContext(UserContext);
    const {
        setArrayHabitos,
        arrayDays,
        setArrayDays,
        dias,
        id,
    } = props;
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const navigate = useNavigate()

    function deletarHabito() {
        
        const config = {
            headers: {
                Authorization: `Bearer ${user}`,
            },
        };
        axios
            .delete(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
                config
            )
            .then(() => {
                alert("deletou");
                axios
                    .get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`)
                    .then((resposta) => {
                        console.log(resposta.data);
                        setArrayHabitos(resposta.data);
                        navigate('/day');
                    })
                    .catch((error) => {
                        console.log("Erro!", error);
                    });
            })
            .catch(function (error) {
                console.log(error.data);
            });
    }


    return (
        <ContainerHabito>
            <h1>{props.nome}</h1>
            <GrupoDias>
                {weekdays.map((day, indice) => <DaySelecteds i={indice} dias={dias} arrayDays={arrayDays} setArrayDays={setArrayDays} dia={day} key={indice} disabled />)}
            </GrupoDias>
            <img onClick={() => deletarHabito()} src={Delete} alt="delete-icon" />
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
        
    }img{
        color: #656464;
        width: 15px;
        height: 15px;
        position:absolute;
        margin-left: 308px ;
        cursor: pointer;
    }img:hover{
    -webkit-transform: scale(1.5);
    transform: scale(1.3);
    }
`
const GrupoDias = styled.div`
    display: flex;
    gap: 8px;
`