import styled from "styled-components";
import Logo from "../../imagens/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function TelaCadastro() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [realizarCadastro, setRealizarCadastro] = useState(false);

    function cadastro(event) {
        event.preventDefault();

        const userInfos = {
            email: email,
            name: nome,
            password: senha,
            image: foto
        };

        setRealizarCadastro(true);

        setTimeout(() => {
        axios
            .post(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
                userInfos
            )
            .then((response) => {
                console.log("O POST DEU CERTO", response);
                navigate("/");
                console.log(response.data.config.headers.Autorization)
            })
            .catch((error) => {
                console.log("O POST DEU ERRO", error);
                alert("Os dados inseridos estão em uso. Faça o Login ou tente cadastrar novos dados")
                window.location.reload()
            })
            .finally(() => {
                setRealizarCadastro(false);
            });
    }, 2000);
}

    return (
        <Cadastro>
            <img src={Logo} alt="logo" />
            <ContainerForm onSubmit={cadastro}>
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
                {/* <button type="submit">Cadastrar</button> */}
                <ButtonWrapper>
                <StyledButton type="submit" disabled={realizarCadastro}>
                    {realizarCadastro ? (
                        <ThreeDots height={40} width={40} color="#FFFFFF" />
                    ) : (
                        "Cadastrar"
                    )}
                </StyledButton>
            </ButtonWrapper>
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

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

const StyledButton = styled.button`
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
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: #89afd6; 
        transition: 0.5s;
        opacity: 0.7;
        }     
`