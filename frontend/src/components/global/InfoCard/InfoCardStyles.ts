import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const BackgroundContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    position: absolute ;
    justify-content: center;

`
export const ContainerInfo = styled.div`
    
    display: flex;
    justify-content: center;
    width: 80vh;
    height: 6vh;
    border: solid 1px ${colors.lightGray};
    border-radius: 1vh;
    outline: none;
    padding: 2vh;
    color: ${colors.darkGray};
`

export const IconInfo = styled.div`
    position: relative;
    left: 10vh;
    bottom: 3vh;
    width: 40px;
    height: 40px;
    background-image: url('/assets/svg/Halter.svg');
    background-repeat: no-repeat;
`