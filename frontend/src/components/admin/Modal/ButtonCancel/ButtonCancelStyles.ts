import styled from "styled-components";
import { colors } from "@/styles/Theme";

export const ButtonModalStyle = styled.input`
    width: 100%;
    height: 60px;
    border-radius: 10px;
    background-color: ${colors.lightGrayGradient_40};
    padding: 10px;
    font-size: 16px;
    margin-top: 30px;
    font-weight: bold;
    color: ${colors.opacityDarkGray_60};
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .2s ease-in-out;

    &:hover{
        background-color: ${colors.lightGrayGradient_60};
        color: ${colors.darkGray};
    }
`