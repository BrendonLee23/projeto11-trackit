import styled from "styled-components"
import NavTop from "../../components/NavTop"
import NavBot from "../../components/NavBot"



export default function HomePage(){


    return(
        <Home>
            <NavTop/>
            <NavBot/>
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

