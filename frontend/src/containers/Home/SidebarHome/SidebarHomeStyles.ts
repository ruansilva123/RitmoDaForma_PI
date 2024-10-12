import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";

export const SidebarHomeStyle = styled.aside`
    position: fixed;
    width: 65px;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: end;
    z-index: 2;
    mix-blend-mode: difference;

    @media ${breakpoints.md} {
        width: 40px;
    }

    @media ${breakpoints.sm} {
        width: 30px;
    }

    @media ${breakpoints.xs} {
        display: none;
    }
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