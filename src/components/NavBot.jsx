import { Link } from "react-router-dom";
import styled from "styled-components";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";


export default function NavBot() {

    const {porcentagem} = useContext(UserContext)

    return (
        <Bottom>
            <Link to={"/habit"} className="link">
                <h1>Hábitos</h1>
            </Link>
            <Link to={"/day"} className="link">
                <StyledButton>
                    <CircularProgressbar styles={buildStyles({
                        pathColor: '#FFFFFF',
                        textColor: '#FFFFFF',
                        trailColor: '#52B6FF',
                        // textSize: '40px'
                        fontFamily:  'Lexend Deca'
                    })} value={porcentagem} maxValue={100} />
                    <p>Hoje</p>
                </StyledButton>
            </Link>
            <Link to={"/historic"} className="link">
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
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    .link {
        text-decoration: none;
    }
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
`

const StyledButton = styled.div`
    background-color: #52B6FF;
    border-radius: 50%;
    width: 91px;
    height: 91px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6px;
    position: relative;
    p{
        position: absolute;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #FFFFFF;
    }
`