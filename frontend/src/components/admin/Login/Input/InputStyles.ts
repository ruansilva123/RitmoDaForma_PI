import styled from "styled-components";
import { colors } from "@/styles/Theme";

export const InputComponent = styled.input`
    width: 400px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid ${colors.lightGray};
    color: ${colors.darkGray};
    outline: none;
    background-color: ${colors.lightGrayGradient_20};
    padding: 10px;
    margin: 10px;

    &:focus{
        background-color: ${colors.lightGrayGradient_40}
    }
`