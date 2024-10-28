import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";

export const SubtitleContainerStyle = styled.section`
    height: 100%;    
    position: relative;
    min-height: 100px;
`

export const ImageWaveWhite = styled.img`
    position: absolute;
    bottom: 99%;
    right: 0;
    height: 40vh;
    min-height: 200px;
`

export const TextContainer = styled.div`
    padding-top: 10%; 
    padding-inline: 120px; 
    margin-top: clamp(50px, 36vh, 36vh);
    display: flex;
    justify-content: center;

    /* @media ${breakpoints.lt} {
        padding-top: 20px; 
        margin-top: 200px;
    } */

    &>div{
        width: 100%;
        max-width: 1500px;
        @media ${breakpoints.xs} {
            text-align: center;    
        }
    }

    @media ${breakpoints.md} {
        padding-inline: 80px;
    }

    @media ${breakpoints.sm} {
        padding-inline: 55px;
    }

    @media ${breakpoints.xs} {
        padding-inline: 15px;
    }
`;