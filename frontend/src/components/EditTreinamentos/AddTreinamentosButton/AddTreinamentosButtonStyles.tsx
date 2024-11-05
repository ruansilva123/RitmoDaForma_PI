import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const AddTreinamentosButtonStyle = styled.input`
    background-color: transparent   ;
    border-radius: 10px;
    border: 1px solid ${colors.darkRed};
    color: ${colors.darkRed};
    width: 100%;
    cursor: pointer;
    padding: 18px;
    margin-block: 30px;
    font-size: 18px;
    transition: all .2s ease-in-out;

    &:hover{
        color: white;
        background-color: ${colors.darkRed};
    }
`