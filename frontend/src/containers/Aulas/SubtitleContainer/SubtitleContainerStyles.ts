import styled from "styled-components";

export const SubtitleContainerStyle = styled.section`
    height: 100%;
    
`

export const ImageWaveWhite = styled.img`
    position: absolute;
    bottom: 52vh;
    right: 0vh;
    height: 40vh;
`;

export const BackgroundSubTitleContainer = styled.div`
    padding-top: 18vh; 
    padding-inline: 18vh; 
    margin-top: clamp(50px, 36vh, 36vh);
    display: flex;
    justify-content: center;
    &>div{
        width: 100%;
        max-width: 1500px;
    }
`;