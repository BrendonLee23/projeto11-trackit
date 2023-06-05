import styled from "styled-components"
import NavTop from "../../components/NavTop"
import NavBot from "../../components/NavBot"
import { useContext, useEffect, useState } from "react"
import UserContext from "../../contexts/UserContext"
import axios from "axios"
import HabitDay from "../../components/HabitDay"


export default function DayPage() {

    const { user, porcentagem, setPorcentagem} = useContext(UserContext)
    const [mark, setMark] = useState(0)
    const [lista, setLista] = useState(undefined)

    // Função para definir a lista
    const definirLista = (novaLista) => {
        setLista(novaLista);
    };
    console.log(definirLista)
    // Variável para armazenar o número de itens na lista
    const quantidadeItens = lista ? lista.length : 0;

    const definirPorcentagem = () => {
        if (quantidadeItens > 0) {
            const percent = Math.ceil((mark / quantidadeItens) * 100);
            setPorcentagem(percent);
        } else {
            setPorcentagem(0);
        }
    };

    console.log(quantidadeItens)
    console.log(mark)
    console.log(porcentagem)

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
                setLista(response.data)

            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        definirPorcentagem();
    }, [mark, quantidadeItens]);


    return (
        <Day>
            <NavTop />
            <ContainerDay>
                <Header>
                    <Title>{diaDaSemana}, {dataFormatada}</Title>
                </Header>
                {mark === 0 ? <p>Nenhum hábito concluído ainda</p>
                    :
                    <SubText>{porcentagem}% dos hábitos concluídos</SubText>
                }
                <>
                    {lista?.map((h, i) => (
                        <HabitDay
                            key={i}
                            nome={h.name}
                            sequencia={h.currentSequence}
                            record={h.highestSequence}
                            mark={h.done}
                            setMark={setMark}
                        />
                    ))}
                </>
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

const SubText = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #8FC549;
    margin-bottom: 15px;
    `
