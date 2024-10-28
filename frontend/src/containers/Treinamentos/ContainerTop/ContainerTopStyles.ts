import styled from "styled-components";
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
`

export const ContainerSubtitle = styled.div`
    width: 100%;
    max-width: 1500px;
    @media ${breakpoints.xs} {
        text-align: center;    
    }
`

export const BackgroundContainerTop = styled.div`
    background-color: white;
    width: 100%;
    padding-inline: 120px;
    padding-top: 10vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${breakpoints.md}{
        bottom: 0vh;
        padding-inline: 80px;
    }

    @media ${breakpoints.sm}{
        padding: 4vh;
        padding-inline: 55px;
    }

    @media ${breakpoints.bg}{
        bottom: 0vh;
    }

    @media ${breakpoints.xs} {
        padding-inline: 15px;
    }
`

export const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: white;
    padding-block: 100px;
    
    @media ${breakpoints.md}{
        padding-block: 50px;
    }
    
    @media ${breakpoints.sm}{
        padding: 0px;
    }
`