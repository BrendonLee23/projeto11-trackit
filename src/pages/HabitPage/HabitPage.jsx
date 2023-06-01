import styled from "styled-components"
import NavTop from "../../components/NavTop"
import NavBot from "../../components/NavBot"
import AddButton from "../../imagens/add.svg"
import NovoHabito from "../../components/NovoHabito"


export default function HabitPage() {


    return (
        <Home>
            <NavTop />

            <ContainerHabitos>
                <Header>
                    <Title>Meus hábitos</Title>
                <button>
                    <img src={AddButton} alt="add-button" />
                </button>
                </Header>
                    <NovoHabito />
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </ContainerHabitos>
            <NavBot />
        </Home>
    )
}

const Home = styled.div`
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
button{
    background: #52B6FF;
    border-radius: 4.63636px;
    width: 40px;
    height: 35px;
    border: #297fbd;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    cursor: pointer;
}
`

