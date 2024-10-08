import styled from "styled-components";
import { colors } from "../../styles/Theme";

export const AulasBackground = styled.main`  
    background-image: ${colors.gradientDarkGray};
`;

export const ContentAulasContainer = styled.div`
    background-color: white;
`

export const MotivationalPhrase = styled.p`
    color: white;
    position: absolute;
    top: 20vh;
    left: 17%;
    opacity: 70%;
    font-size: clamp(12px, 1.2vw, 1.6rem);
`