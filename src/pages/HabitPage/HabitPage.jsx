import styled from "styled-components"
import NavTop from "../../components/NavTop"
import NavBot from "../../components/NavBot"
import AddButton from "../../imagens/add.svg"
import NovoHabito from "../../components/NovoHabito"
import { useContext, useEffect, useState } from "react"
import UserContext from "../../contexts/UserContext"
import axios from "axios"
import MeuHabito from "../../components/MeuHabito"


export default function HabitPage() {

    const { user } = useContext(UserContext)

    const [habito, setHabito] = useState(false)
    const [idHabito, setIdHabito] = useState(undefined)
    console.log(idHabito)

    const [arrayHabitos, setArrayHabitos] = useState(undefined)

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${user}`,
            },
        };

        axios
            .get(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
                config
            )
            .then((response) => {
                console.log(response.data)
                setArrayHabitos(response.data)
                console.log(response.data.id)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    

    function adicionarHabito() {
        if (habito === false) {
            setHabito(true)
        } else {
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
                {habito === true ? <NovoHabito habito={habito} setHabito={setHabito} /> : ""}
                <ListaHabitos>
                    {arrayHabitos === undefined || arrayHabitos.length === 0 ?
                        <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
                        :
                        arrayHabitos.map((h, i) => <MeuHabito key={i} setArrayHabitos={setArrayHabitos} idHabito={idHabito} setIdHabito={setIdHabito} id={h.id} dias={h.days} arrayHabitos={arrayHabitos} nome={h.name} />)
                    }
                </ListaHabitos>
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
const ContainerHabitos = styled.div`
height: 580px;
width: 375px;
background-color: #E5E5E5;
display: flex;
flex-direction: column;
padding: 15px;
margin-top: 70px;
overflow-y: scroll;
position: relative;
padding-bottom: 120px;
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
    cursor: pointer;
    
}button:hover{
    -webkit-transform: scale(1.5);
    transform: scale(1.1);
    }
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
const ListaHabitos = styled.div`
    width: 345px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
`



