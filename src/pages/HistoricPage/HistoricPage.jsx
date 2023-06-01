import styled from "styled-components"
import NavTop from "../../components/NavTop"
import NavBot from "../../components/NavBot"



export default function HistoricPage() {


    return (
        <Historic>
            <NavTop />
            <ContainerHabitos>
                <Header>
                    <Title>Histórico</Title>
                </Header>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </ContainerHabitos>
            <NavBot />
        </Historic>
    )
}

const Historic = styled.div`
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
const ContainerHabitos = styled.div`
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
    color: #666666;
}
`
const Header = styled.div`
display: flex;
justify-content: space-between;
margin-top: 15px;
margin-bottom: 20px;
`