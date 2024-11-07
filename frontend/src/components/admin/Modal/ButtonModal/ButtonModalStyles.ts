import styled from "styled-components";
import { colors } from "@/styles/Theme";

export const ButtonModalStyle = styled.input`
    width: 100%;
    height: 60px;
    border-radius: 10px;
    background-color: ${colors.baseRed};
    padding: 10px;
    font-size: 16px;
    margin-top: 30px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .2s ease-in-out;

    &:hover{
        background-color: ${colors.darkRed};
    }
`