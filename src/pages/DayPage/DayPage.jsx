import styled from "styled-components"
import NavTop from "../../components/NavTop"
import NavBot from "../../components/NavBot"


export default function DayPage() {

    const dataAtual = new Date();

    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');

    // Obtém o dia da semana atual
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const diaDaSemana = diasDaSemana[dataAtual.getDay()];

    // Formata a data no formato "dd/mm"
    const dataFormatada = `${dia}/${mes}`;

    return (
        <Day>
            <NavTop />
            <ContainerDay>
                <Header>
                    <Title>{diaDaSemana}, {dataFormatada}</Title>
                </Header>
                <p>porcentagem verdinha</p>
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
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin-top: 70px;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #8FC549;
}
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 15px;
`