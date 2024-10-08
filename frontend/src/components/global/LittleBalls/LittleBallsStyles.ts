import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const ContainerBalls = styled.div`
    display: flex;
    justify-content: center;
    gap: 1vh;
    width: 140vh;
    height: 5vh;
    background-color: pink;
`

export const Balls = styled.div`
    height: 18px;
    width: 18px;
    border-radius: 20px;
    border: 1px solid ${colors.lightRed};
`