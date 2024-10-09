import styled from "styled-components";
import { colors } from "../../../styles/Theme";

interface ContainerBallsProps {
    isVertical: boolean,
}

export const ContainerBalls = styled.div<ContainerBallsProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vh;
    height: 5vh;
    transform: ${ props => props.isVertical ? "rotate(90deg)" : "rotate(0deg)"};
`

export const Balls = styled.div`
    height: 18px;
    width: 18px;
    border-radius: 20px;
    border: 1px solid ${colors.lightRed};
`