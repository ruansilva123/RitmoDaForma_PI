import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const InputSearch = styled.input`
    width: 80vh;
    height: 4vh;
    border: solid 1px ${colors.lightGray};
    border-radius: 1vh;
    outline: none;
    padding: 1vh;
    color: ${colors.darkGray};
    background-image: url('assets/svg/SearchIcon.svg');
    background-repeat: no-repeat;
    background-position: 75vh;

    &:focus{
       background-color: ${colors.lightGrayOpacity};
    }
`
