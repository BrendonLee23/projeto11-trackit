import styled from "styled-components"
import NavTop from "../../components/NavTop"
import NavBot from "../../components/NavBot"
import AddButton from "../../imagens/add.svg"
import NovoHabito from "../../components/NovoHabito"
import { useState } from "react"


export default function HabitPage() {

    const [habito, setHabito] = useState(false)


    function adicionarHabito(){
        if(habito === false){
            setHabito(true)
        }else{
            setHabito(false)
        }
    }

    return (
        <Home>
            <NavTop />

            <ContainerHabitos>
                <Header>
                    <Title>Meus hábitos</Title>
                <button onClick={adicionarHabito}>
                    <img src={AddButton} alt="add-button" />
                </button>
                </Header>
                {habito === true? <NovoHabito habito={habito} setHabito={setHabito}  /> : "" }
                    
                <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
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
        margin-top: 5px;
`

const ContainerHabitos = styled.div`
height: 100%;
width: 375px;
background-color: #E5E5E5;
display: flex;
flex-direction: column;
padding: 15px;
margin-top: 70px;
h2{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    margin-top: 20px;
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

