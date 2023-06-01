import styled from "styled-components"
import Logo from "../../imagens/logo.png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";

export default function TelaLogin() {

    const { user, setUser} = useContext(UserContext)
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function realizarLogin(event) {
        event.preventDefault();


        const userInfos = {
            email: email,
            password: senha
        };

        const config = {
            headers: {
                "Authorization": `Bearer ${user}`
            }
        }

        axios
            .post(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
                userInfos, config
            )
            .then((response) => {
                console.log("O LOGIN DEU CERTO", response);
                navigate("/habit");
                setUser(response.data.token)
            })
            .catch((error) => {
                console.log("O POST DEU ERRO", error);
                alert("Dados incorretos. Tente novamente.")
                window.location.reload()
            });
    }


    return (
        <Login>
            <img src={Logo} alt="logo" />
            <ContainerForm onSubmit={realizarLogin}>
            <input
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="email"
                />
                <input
                    required
                    onChange={(e) => setSenha(e.target.value)}
                    value={senha}
                    type="password"
                    placeholder="senha"
                />
                <button type="submit">Entrar</button>
                <Link to={"/cadastro"}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
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
        margin-top: -130px;
        margin-bottom: 33px;
    }
`

const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
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
        border: #064470;
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
        margin-bottom: 20px;
        &:hover {
            background-color: #89afd6; 
            transition: 0.5s;
            opacity: 0.7;
            }     
    }
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`