import styled from "styled-components";
import { colors } from "../../../styles/Theme";

interface subTitle {
    darkMode: boolean,
}

export const SubTitleStyle = styled.h2<subTitle>`
    font-family: "Tahoma";
    font-size: 44px;
    color: ${(props) => props.darkMode ? 'white' : colors.darkGray};  
    font-weight: ${ (props) => props.darkMode && 'bold' };
`

export const MainTitle = styled.h2`
    font-family: "Quicksilver";
    font-size: 72px;
    background: ${colors.gradientRed_20};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`