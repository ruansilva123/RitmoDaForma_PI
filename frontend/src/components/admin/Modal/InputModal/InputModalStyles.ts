import styled from "styled-components";
import { colors } from "@/styles/Theme";

export const InputModalStyle = styled.input`
    width: 100%;
    height: 60px;
    border-radius: 10px;
    border: 1px solid ${colors.lightGray};
    color: ${colors.darkGray};
    outline: none;
    background-color: ${colors.lightGrayGradient_20};
    padding: 10px;
    font-size: 16px;
    margin-top: 30px;
    transition: all .2s ease-in-out;

    &:focus{
        background-color: ${colors.lightGrayGradient_40}
    }
`

export const TextAreaStyle = styled.textarea`
    width: 100%;
    height: 100px;
    resize: none;
    border-radius: 10px;
    border: 1px solid ${colors.lightGray};
    color: ${colors.darkGray};
    outline: none;
    background-color: ${colors.lightGrayGradient_20};
    padding: 10px;
    font-size: 16px;
    margin-top: 30px;
    transition: all .2s ease-in-out;

    &:focus{
        background-color: ${colors.lightGrayGradient_40}
    }
`