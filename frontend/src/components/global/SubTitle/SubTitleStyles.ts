import styled from "styled-components";
import { colors } from "../../../styles/Theme";
import breakpoints from "../../../styles/Breakpoints";

interface subTitle {
    darkMode: boolean,
}

export const SubTitleStyle = styled.h2<subTitle>`
    font-family: "Tahoma";
    font-size: 44px;
    color: ${(props) => props.darkMode ? 'white' : colors.darkGray};  
    font-weight: ${ (props) => props.darkMode && 'bold' };

    @media ${breakpoints.sm}{
        font-size: 30px;
    }

    @media ${breakpoints.md}{
        font-size:30px;
    }
`

export const MainTitle = styled.h2`
    font-family: "Quicksilver";
    font-size: 72px;
    background: ${colors.gradientRed_20};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media ${breakpoints.sm}{
        font-size: 40px;
    }
    
    @media ${breakpoints.md}{
        font-size:48px;
    }
`