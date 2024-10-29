import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";

export const SubtitleContainerStyle = styled.section`
    position: relative;
    margin-top: clamp(50px, 36vh, 36vh);
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
    
    display: flex;
    justify-content: center;

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