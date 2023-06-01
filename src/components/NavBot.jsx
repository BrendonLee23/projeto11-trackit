import { Link } from "react-router-dom";
import styled from "styled-components";
import BotaoHoje from "../imagens/todayButton.png.svg";
export default function NavBot() {
    return (
        <Bottom>
            <Link to={"/habit"} className="link">
                <h1>Hábitos</h1>
            </Link>
            <Link to={"/day"} className="link">
                <StyledButton>
                    <img src={BotaoHoje} alt="today-button" />
                    <h1>Hoje</h1>
                </StyledButton>
            </Link>
            <Link to={"/habit"} className="link">
                <h1>Histórico</h1>
            </Link>
        </Bottom>
    );
}

const Bottom = styled.div`
    width: 375px;
    height: 70px;
    left: 0px;
    top: 597px;
    background: #f3f3f3;
    bottom: 0px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .link {
      text-decoration: none; /* Remover sublinhado do link */
    }

    h1 {
    outline: 0;
    -family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
    }
`;

const StyledButton = styled.div`
    padding: 0;
    margin: 0;
    cursor: pointer;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    img{
            position: relative;
        }
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #FFFFFF; 
        position: absolute;
    }
`;

