import styled from "styled-components";
import Logo from "../../imagens/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function TelaCadastro() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");

    function finalizarCadastro(event) {
        alert("teste")
        event.preventDefault();

        const userInfos = {
            email: email,
            name: nome,
            password: senha,
            image: foto,
        };

        axios
            .post(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
                userInfos
            )
            .then((response) => {
                console.log("O POST DEU CERTO", response);
                navigate("/");
            })
            .catch((error) => {
                console.log("O POST DEU ERRO", error);
            });
    }

    return (
        <Cadastro>
            <img src={Logo} alt="logo" />
            <ContainerForm onSubmit={finalizarCadastro}>
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
                <input
                    required
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                    type="text"
                    placeholder="nome"
                />
                <input
                    required
                    onChange={(e) => setFoto(e.target.value)}
                    value={foto}
                    type="url"
                    placeholder="foto"
                />
                <button type="submit">Cadastrar</button>
                <Link to={"/"}>
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </ContainerForm>
        </Cadastro>
    );
}


const Cadastro = styled.div`
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
        margin-top: -23px;
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

