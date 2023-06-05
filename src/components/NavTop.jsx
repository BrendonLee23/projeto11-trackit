import styled from "styled-components"
import Marca from "../imagens/logoTop.png"
import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function NavTop() {

    const { userImage } = useContext(UserContext)

    return (
        <Top  data-test="header" >
            <img src={Marca} alt="logo" />
            <UserImage>
                <img data-test="avatar" src={userImage} alt="user-image" />
            </UserImage>
        </Top>
    )
}

const Top = styled.div`
    width: 375px;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    top: 0px;
    position: fixed;
    display: flex;  
    align-items: center;
    justify-content: space-between;
    img{
        margin-left: 20px;
    }
`
const UserImage = styled.div`
        img{
        border-radius: 98.5px;
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }
    `
