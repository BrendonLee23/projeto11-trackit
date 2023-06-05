import styled from "styled-components";
import { useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import Check from "../imagens/check.svg";

export default function HabitDay(props) {
    const { user } = useContext(UserContext);
    const { id, done , sequencia, record, lista, setLista } = props;


    const texto1 = <span>{`${sequencia} dias`}</span>;
    const texto2 = <span>{`${record} dias`}</span>;

    function marcarHabito() {

        const config = {
            headers: {
                Authorization: `Bearer ${user}`,
            },
        };

        // const markIncrement = !check ? 1 : -1;

        axios
            .post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${done === true ? "uncheck" : "check"}`,
                {},
                config
            )
            .then((response) => {
                console.log(response.data)
                const habito = lista.find((item) => item.id === id)
                console.log(habito)
                habito.done = !habito.done
                setLista([...lista])
                // setMark(prevMark => prevMark + markIncrement);
                axios
                    .get(
                        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
                        config
                    )
                    .then((response) => {
                        console.log(response.data)
                        setLista(response.data)
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <Habito 
                data-test="today-habit-container"
                done={done}>
            <DivInfos sequencia={sequencia} record={record} done={done}>
                <h1 data-test="today-habit-name" >{props.nome}</h1>
                <h2 data-test="today-habit-sequence" >Sequência atual:
                    <span data-test="today-habit-sequence" > {texto1}</span>
                </h2>
                <h3 data-test="today-habit-record" >Seu recorde:
                    <span data-test="today-habit-record" > {texto2}</span>
                </h3>
            </DivInfos>
            <img data-test="today-habit-check-btn" onClick={marcarHabito} src={Check} alt="check-img" />
        </Habito>
    );
}

const Habito = styled.div`
    background: #ffffff;
    border-radius: 5px;
    width: 340px;
    height: 94px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 7px;
    img {
    width: 69px;
    height: 69px;
    background: ${props => props.done ? "#8FC549" : "#E7E7E7"};
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    cursor: pointer;
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
        color:#666666;
        span{
            color: ${props => props.done ? "#8FC549" : "#E7E7E7"};
        }
    }h3{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
        span{
            color: ${props => props.sequencia === props.record && props.record > 0 ? "#8FC549" : "#E7E7E7"};
        }
    }
`