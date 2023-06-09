import styled from "styled-components"
import Logo from "../../imagens/logo.png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { ThreeDots } from "react-loader-spinner";

export default function TelaLogin() {

    const { user, setUser, setUserImage } = useContext(UserContext)
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [realizarLogin, setRealizarLogin] = useState(false);

    function login(event) {
        event.preventDefault();

        const userInfos = {
            email: email,
            password: senha,
        };

        const config = {
            headers: {
                Authorization: `Bearer ${user}`,
            },
        };

        setRealizarLogin(true);

        setTimeout(() => {
            axios
                .post(
                    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
                    userInfos,
                    config
                )
                .then((response) => {
                    console.log("O LOGIN DEU CERTO", response);
                    navigate("/day");
                    setUser(response.data.token);
                    setUserImage(response.data.image);
                })
                .catch((error) => {
                    console.log("O POST DEU ERRO", error);
                    alert("Dados incorretos. Tente novamente.");
                    window.location.reload();
                })
                .finally(() => {
                    setRealizarLogin(false);
                });
        }, 2000);
    }

return (
    <Login>
        <img src={Logo} alt="logo" />
        <ContainerForm onSubmit={login}>
            <input
                required
                data-test="email-input"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="email"
            />
            <input
                required
                data-test="password-input"
                onChange={(e) => setSenha(e.target.value)}
                value={senha}
                type="password"
                placeholder="senha"
            />
            {/* <button type="submit">Entrar</button> */}
            <ButtonWrapper>
                <StyledButton  data-test="login-btn" type="submit" disabled={realizarLogin}>
                    {realizarLogin ? (
                        <ThreeDots height={40} width={40} color="#FFFFFF" />
                    ) : (
                        "Entrar"
                    )}
                </StyledButton>
            </ButtonWrapper>
            <Link data-test="signup-link" to={"/cadastro"}>
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