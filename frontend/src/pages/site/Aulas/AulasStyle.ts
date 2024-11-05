import styled from "styled-components";
import { colors } from "../../../styles/Theme";
import breakpoints from "../../../styles/Breakpoints";

export const AulasBackground = styled.main`  
    background-image: ${colors.gradientDarkGray};
`;

export const ContentAulasContainer = styled.div`
    background-color: white;
`

export const MotivationalPhrase = styled.p`
    color: white;
    position: absolute;
    top: 20%;
    left: 17%;
    opacity: 70%;
    font-size: clamp(12px, 1.2vw, 1.6rem);
    max-width: 50%;

    @media ${breakpoints.xs} {
        top: 18%;   
    }

    @media ${breakpoints.lt} {
        top: 15%;   
    }

`

export const WaveBlackContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: end;
    align-items: end;
`

export const ImageWaveBlack = styled.img`
    width: 70%;
    max-width: 1200px;
`;