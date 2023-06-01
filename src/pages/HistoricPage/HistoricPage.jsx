import styled from "styled-components"
import NavTop from "../../components/NavTop"
import NavBot from "../../components/NavBot"



export default function HistoricPage(){


    return(
        <Historic>
            <NavTop/>
            <Title>Histórico</Title>
            <NavBot/>
        </Historic>
    )
}

const Historic = styled.div`
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
