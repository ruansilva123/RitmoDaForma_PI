import styled from "styled-components";
import { colors } from "../../../../styles/Theme";
import breakpoints from "../../../../styles/Breakpoints";

export const Title = styled.h1`
    caret-color: transparent;
    font-family: "Quicksilver";
    cursor: default;
`

export const TitleRitmoDown = styled.div`
    transform: rotate(180deg);
    transform: scaleY(-1);
    margin: 0;
    padding: 0;
    background: ${colors.gradientRed};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: brightness(1.1);
    text-align: center;
    cursor: default;
`

export const TitleRitmoUp = styled.div`
    margin-bottom: -22px;
    background: ${colors.gradientWhiteToGray};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    cursor: default;

    @media ${breakpoints.md} {
        margin-bottom: -16px;
    }
`

export const TitleRitmo = styled.div`
    font-size: clamp(80px, 9vw, 164px); 
    cursor: default;

    @media ${breakpoints.xs} {
        font-size: 60px;
    }
`

export const DaForma = styled.div`
    font-size: clamp(24px, 3vw, 64px); 
    font-family: "RacingSansOne";
    text-align: center;
    margin-top: -15px;
    cursor: default;
`