import styled from "styled-components"

export default function DaySelecteds(props) {
    const { i, dias } = props


    return (
        <Day type="button" disabled isDaySelected={dias && dias.includes(i)}>
            {props.dia}
        </Day>
    )
}

const Day = styled.button`
    box-sizing: border-box;
    background: ${(props) => (props.isDaySelected ? "#a9a8a8" : "#ffffff")};
    color: ${(props) => (props.isDaySelected ? "#ffffff" : "#8f8e8e")};
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    width: 31px;
    height: 31px;
    margin-top: 10px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
`;
