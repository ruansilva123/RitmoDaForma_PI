import styled from "styled-components";
import { colors } from "@/styles/Theme";
import breakpoints from "@/styles/Breakpoints";

interface ButtonModalStyleProps {
    "data-isCancel": boolean,
}

export const ButtonModalStyle = styled.input<ButtonModalStyleProps>`
    width: 100%;
    height: 60px;
    border-radius: 10px;
    background-color: ${(props) => props["data-isCancel"] ? colors.lightGrayGradient_40 : colors.baseRed};
    padding: 10px;
    font-size: 16px;
    margin-top: 30px;
    font-weight: bold;
    color: ${(props) => props["data-isCancel"] ? colors.opacityDarkGray_60 : "white"};
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .2s ease-in-out;

    &:hover{
        background-color: ${(props) => props["data-isCancel"] ? colors.lightGrayGradient_60 : colors.darkRed};
        color: ${(props) => props["data-isCancel"] ? colors.darkGray : "white"};
    }

    @media ${breakpoints.md} {
        font-size: 16px;
        padding: 5px;   
    }

    @media ${breakpoints.bs} {
        font-size: 14px;
        height: 40px;
        margin-top: 20px;
    }

    @media ${breakpoints.sm} {
        font-size: 12px;
        
    }

    @media ${breakpoints.xs}{
        font-size: 10px;
        border-radius: 0px;
    }
`