import styled from "styled-components";
import { colors } from "@/styles/Theme";

export const NavbarContainer = styled.nav`
    display: flex;
    width: 100%;
    height: 10vh;
    padding-inline: 20px;
`

export const Nav = styled.nav`
    width: 50%;
    height: 100%;

    &>ul{
        display: flex;
        color: white;
        gap: 15%;
        justify-content: end;
        padding-right: 5%;
        height: 100%;
        
        &>li{
            cursor: pointer;
            height: 100%;
            display: flex;
            align-items: center;
            font-size: 14px;
            transition: all .2s ease-in-out;
            &:hover{
                color: ${colors.lightGrayGradient_20};
            }
        }
    }
` 

export const LogoContainer = styled.nav`
    display: flex;
    height: 100%;
    width: 50%;
    align-items: center;
` 

export const NavSelected = styled.li`
    color: ${colors.lightGrayGradient_60};
`
