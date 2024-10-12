import styled from "styled-components";
import { colors } from "../../../styles/Theme";

interface ContainerBallsProps {
    "data-isvertical": boolean,
}

export const ContainerBalls = styled.div<ContainerBallsProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transform: ${ props => props["data-isvertical"] ? "rotate(90deg)" : "rotate(0deg)"};
`

export const Balls = styled.div`
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: 1px solid ${colors.lightRed};
`