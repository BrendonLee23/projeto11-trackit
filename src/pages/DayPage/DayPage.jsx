import styled from "styled-components"
import NavTop from "../../components/NavTop"
import NavBot from "../../components/NavBot"
import Check from "../../imagens/check.svg"
import { useContext, useEffect } from "react"
import UserContext from "../../contexts/UserContext"
import axios from "axios"


export default function DayPage() {

    const { user } = useContext(UserContext)
    const dataAtual = new Date();

    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');

    // Obtém o dia da semana atual
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaDaSemana = diasDaSemana[dataAtual.getDay()];

    // Formata a data no formato "dd/mm"
    const dataFormatada = `${dia}/${mes}`;

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${user}`,
            },
        };

        axios
            .get(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
                config
            )
            .then((response) => {
                console.log(response.data)
                
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <Day>
            <NavTop />
            <ContainerDay>
                <Header>
                    <Title>{diaDaSemana}, {dataFormatada}</Title>
                </Header>
                <p>Nenhum hábito concluído ainda</p>
                <Habito>
                    <DivInfos>
                        <h1>Ler 1 capítulo de livro</h1>
                        <h2>Sequência atual: 3 dias</h2>
                        <h3>Seu recorde: 5 dias</h3>
                    </DivInfos>
                    <img src={Check} alt="check-img" />
                </Habito>
                <Habito>
                    <DivInfos>
                        <h1>Ler 1 capítulo de livro</h1>
                        <h2>Sequência atual: 3 dias</h2>
                        <h3>Seu recorde: 5 dias</h3>
                    </DivInfos>
                    <img src={Check} alt="check-img" />
                </Habito>
                <Habito>
                    <DivInfos>
                        <h1>Ler 1 capítulo de livro</h1>
                        <h2>Sequência atual: 3 dias</h2>
                        <h3>Seu recorde: 5 dias</h3>
                    </DivInfos>
                    <img src={Check} alt="check-img" />
                </Habito>
                <Habito>
                    <DivInfos>
                        <h1>Ler 1 capítulo de livro</h1>
                        <h2>Sequência atual: 3 dias</h2>
                        <h3>Seu recorde: 5 dias</h3>
                    </DivInfos>
                    <img src={Check} alt="check-img" />
                </Habito>
                <Habito>
                    <DivInfos>
                        <h1>Ler 1 capítulo de livro</h1>
                        <h2>Sequência atual: 3 dias</h2>
                        <h3>Seu recorde: 5 dias</h3>
                    </DivInfos>
                    <img src={Check} alt="check-img" />
                </Habito>
                <Habito>
                    <DivInfos>
                        <h1>Ler 1 capítulo de livro</h1>
                        <h2>Sequência atual: 3 dias</h2>
                        <h3>Seu recorde: 5 dias</h3>
                    </DivInfos>
                    <img src={Check} alt="check-img" />
                </Habito>
                <Habito>
                    <DivInfos>
                        <h1>Ler 1 capítulo de livro</h1>
                        <h2>Sequência atual: 3 dias</h2>
                        <h3>Seu recorde: 5 dias</h3>
                    </DivInfos>
                    <img src={Check} alt="check-img" />
                </Habito>
                <Habito>
                    <DivInfos>
                        <h1>Ler 1 capítulo de livro</h1>
                        <h2>Sequência atual: 3 dias</h2>
                        <h3>Seu recorde: 5 dias</h3>
                    </DivInfos>
                    <img src={Check} alt="check-img" />
                </Habito>
                


            </ContainerDay>
            <NavBot />
        </Day>
    )
}

const Day = styled.div`
    width: 375px;
    height: 667px;
    background-color: #E5E5E5;;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;   
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
`
const ContainerDay = styled.div`
    height: 100%;
    width: 375px;
    background-color: #E5E5E5;;
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin-top: 70px;
    overflow-y: scroll;
    position: relative;
    padding-bottom: 90px;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
    margin-bottom: 10px;
}
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 15px;
`
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
        background: #EBEBEB;
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
    }h3{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
    }
`

