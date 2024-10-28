import styled from "styled-components";
import { colors } from "../../../styles/Theme";
import breakpoints from "../../../styles/Breakpoints";

export const NavbarContainer = styled.nav`
    display: flex;
    position: relative;
    width: 100%;
    height: 10vh;
    padding-inline: 20px;
    z-index: 100;

    @media ${breakpoints.xs} {
        padding-inline: 5px;
    }
`

export const Nav = styled.nav`
    width: 50%;
    height: 100%;

    @media ${breakpoints.sm}{
        width: 75%;
    }

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
                color: ${colors.lightRed};
            }

            @media ${breakpoints.xs} {
                font-size: 12px;
            }
        }

        @media ${breakpoints.sm}{
            gap: 10%;
        }
    }
` 

export const LogoContainer = styled.nav`
    display: flex;
    height: 100%;
    width: 50%;
    align-items: center;

    @media ${breakpoints.sm}{
        width: 25%;
    }
` 

export const NavSelected = styled.li`
    color: ${colors.darkRed};
`
