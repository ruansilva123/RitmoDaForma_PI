import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";

export const SubtitleContainerStyle = styled.section`
    height: 100%;    
`

export const BackgroundSubTitleContainer = styled.div`
    padding-top: 10vw; 
    padding-inline: 120px; 
    margin-top: clamp(50px, 36vh, 36vh);
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