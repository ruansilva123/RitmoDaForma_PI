import styled from "styled-components";

export const SidebarHomeStyle = styled.aside`
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: end;
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
        &:hover{
            background-color: rgba(255,255,255, .1);
            border: .5px solid rgba(255,255,255, .5);
        }
    }
`