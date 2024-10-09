import styled from "styled-components";

interface ImageWaveWhiteProps {
    invertWave: boolean,
    bottom: string,
}

export const ImageWaveWhite = styled.img<ImageWaveWhiteProps>`
    position: absolute;
    bottom: ${props => props.bottom};
    right: 0vh;
    height: 40vh;
    transform: ${props => props.invertWave ? "rotate(180deg)" : "rotate(0deg)"};
`;