import styled from "styled-components";
import { colors } from "@/styles/Theme";

export const ButtonComponent = styled.button`
    width: 400px;
    height: 50px;
    color: white;
    font-family: 'Tahoma Bold';
    background-color: ${colors.baseRed};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
    margin: 10px;

    &:hover{
        background-color: ${colors.darkRed};
        transition: all 0.2s ease-in-out;
    }
`