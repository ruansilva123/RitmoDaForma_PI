import styled from "styled-components";
import { colors } from "../../../styles/Theme";

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
`

export const TitleTax = styled.p`
    font-size: 14px;
    color: ${colors.darkGray};
`

export const Price = styled.p`
    font-size: 16px;
    background: ${colors.gradientRed_20};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "QuickSilver";
`