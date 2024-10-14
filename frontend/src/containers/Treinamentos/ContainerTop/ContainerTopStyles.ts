import styled from "styled-components";
import { colors } from "../../../styles/Theme";
import breakpoints from "../../../styles/Breakpoints";

export const ContainerTop = styled.div`
    position: relative;
    margin-top: clamp(50px, 36vh, 36vh);
`

export const ImageWaveWhite = styled.img`
    position: absolute;
    bottom: 99%;
    right: 0vh;
    height: 40vh;

    @media ${breakpoints.sm}{
        bottom: vh;
    }
`

export const BackgroundContainerTop = styled.div`
    background-color: white;
    width: 100%;
    padding: 18vh 18vh 0vh 18vh;

    @media ${breakpoints.sm}{
        padding: 4vh;
    }

    @media ${breakpoints.md}{
        bottom: 0vh;
    }
    
    @media ${breakpoints.bg}{
        bottom: 0vh;
    }
`

export const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: white;
    padding: 10vh;
    
    @media ${breakpoints.md}{
        bottom: 0vh;
    }
    
    @media ${breakpoints.sm}{
        margin-top: 4vh;
        padding: 0vh;
    }
`