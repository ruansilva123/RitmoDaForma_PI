import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const BackgroundContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const ContainerInfo = styled.div`
    display: flex;
    justify-content: center;
    border: solid 1px ${colors.lightGray};
    border-radius: 10px;
    color: ${colors.darkGray};
    padding-block: 18px;
    width: 700px;
    margin-block: 30px;
    position: relative;
`

export const IconInfo = styled.img`
    position: absolute;
    background-repeat: no-repeat;
    width: 28px;
    top: -18%;
    right: -1.5%;
`