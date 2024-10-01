import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const SidebarHomeStyle = styled.aside`
    position: fixed;
    width: 65px;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: end;
    mix-blend-mode: difference;
    z-index: 10;
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;

    &>li{
        border-radius: 50%;
        background-color: rgba(255,255,255, .2);
        border: .5px solid white;
        width: 20px;
        height: 20px;
        cursor: pointer;
        transition: all .2s ease-in-out;
        &:hover{
            background-color: rgba(255,255,255, .1);
            border: .5px solid rgba(255,255,255, .5);
        }
    }
`