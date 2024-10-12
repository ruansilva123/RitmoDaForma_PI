import styled from "styled-components";

interface ImageWaveWhiteProps {
    "data-invertwave": boolean,
    "data-bottom": string,
}

export const ImageWaveWhite = styled.img<ImageWaveWhiteProps>`
    position: absolute;
    bottom: ${props => props["data-bottom"]};
    right: 0vh;
    height: 40vh;
    transform: ${props => props["data-invertwave"] ? "rotate(180deg)" : "rotate(0deg)"};
`;