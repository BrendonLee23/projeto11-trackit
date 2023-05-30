import styled from "styled-components"
import Logo from "../../imagens/logo.png"





export default function TelaLogin() {
    return (
        <Login>
            <img src={Logo} alt="logo" />
            <ContainerForm>
                <input name="email" type="text" placeholder="email" />
                <input name="senha" type="text" placeholder="senha" />
                <button>Entrar</button>
            </ContainerForm>
        </Login>
    )
}



const Login = styled.div`
    width: 375px;
    height: 667px;
    background-color: #E5E5E5;;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 180px;
        height: 179px;
        margin-top: -170px;
        margin-bottom: 33px;
    }
`

const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
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
        color: #DBDBDB;
        padding-left: 10px;
    }
    button{
        background: #52B6FF;
        border-radius: 4.63636px;
        width: 303px;
        height: 45px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        cursor: pointer;
    }
`