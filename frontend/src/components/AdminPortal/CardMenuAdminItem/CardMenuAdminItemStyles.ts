import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const CardMenuAdminItemStyle = styled.div`
    background-color: ${colors.lightGray};
    padding: 20px;
    opacity: 50%;
    color: ${colors.darkGray};
    border: 1px solid ${colors.darkGray};
    border-radius: 10px;
    cursor: pointer;
    height: 150px;
    position: relative;

    &:hover{
        opacity: 100%;
    }
`

export const IconCardMenuAdmin = styled.img`
    position: absolute;
    width: 50px;
    bottom: 20px;
    right: 20px;
`