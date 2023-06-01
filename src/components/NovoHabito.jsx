
import styled from "styled-components"



export default function NovoHabito() {
    return (
        <>
            <Container>
                <input
                    required
                    type="text"
                    placeholder="nome do hábito"
                />
                <CheckDays>
                    <button type="text" >D</button>
                    <button type="text" >S</button>
                    <button type="text" >T</button>
                    <button type="text" >Q</button>
                    <button type="text" >Q</button>
                    <button type="text" >S</button>
                    <button type="text" >S</button>
                </CheckDays>
                <CancelSave>
                    <p>Cancel</p>
                    <button>Salvar</button>
                </CancelSave>
            </Container>
        </>
    )
}


const Container = styled.div`
    width: 340px;
    height: 180px;
    left: 17px;
    top: 147px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    margin-top: 10px;
    margin-bottom: 30px;
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
`

const CheckDays = styled.div`
    display: flex;
    gap: 5px;
    button{
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 31px;
        height: 31px;
        margin-bottom: 30px;
        margin-top: 10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        cursor: pointer;
    }
    `

const CancelSave = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 15px;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
        cursor: pointer;
    }button{
        background: #52B6FF;
        border: #1572b4;
        border-radius: 4.63636px;
        width: 84px;
        height: 35px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
        cursor: pointer;
    }
`