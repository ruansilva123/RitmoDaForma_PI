import styled from "styled-components";
import { colors } from "../../../styles/Theme";
import breakpoints from "../../../styles/Breakpoints";

export const ExtraTaxStyle = styled.div`
    background-color: ${colors.lightGrayGradient_20};
    border: .5px solid ${colors.lightGray};
    padding-block: 10px;
    padding-inline: 25px;
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 10px;
    gap: 20px;
    transition: color .2s ease-in-out;
    &:hover{
        background-color: ${colors.lightGrayGradient_40};
    }
`

export const TitleTax = styled.p`
    font-size: 14px;
    color: ${colors.darkGray};
    @media ${breakpoints.xs} {
        font-size: 12px;
    }
`

export const Price = styled.p`
    font-size: 16px;
    background: ${colors.gradientRed_20};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "QuickSilver";

    @media ${breakpoints.xs} {
        font-size: 14px;
    }
`