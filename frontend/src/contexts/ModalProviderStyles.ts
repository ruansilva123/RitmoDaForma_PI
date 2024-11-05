import styled from "styled-components"
import breakpoints from "../styles/Breakpoints"
import { colors } from "../styles/Theme"

export const ContainerPopUp = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 99;
`

export const BackgroundBlur = styled.div`
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${colors.lightGrayGradient_20};
    backdrop-filter: blur(3px);
    z-index: 99;
`

export const BackgroundPopup = styled.div`
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    width: 100%;
`