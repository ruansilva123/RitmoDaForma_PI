import styled from "styled-components";
import { colors } from "@/styles/Theme";

export const NavbarContainer = styled.nav`
    position: fixed;
    display: flex;
    width: 100%;
    height: 10vh;
    padding-inline: 20px;
`

export const LogoContainer = styled.nav`
    display: flex;
    height: 100%;
    width: 50%;
    align-items: center;

    p{
        color: ${colors.darkGray}
    }
` 
