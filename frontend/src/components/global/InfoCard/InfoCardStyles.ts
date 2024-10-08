import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const BackgroundContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;

`
export const ContainerInfo = styled.div`
    width: 10;
    height: 10px;
    border: solid 1px ${colors.lightGray};
    border-radius: 1vh;
    outline: none;
    padding: 1vh;
    color: ${colors.darkGray};
    background-image: url('assets/svg/SearchIcon.svg');
    background-repeat: no-repeat;
    background-position: 75vh;
`