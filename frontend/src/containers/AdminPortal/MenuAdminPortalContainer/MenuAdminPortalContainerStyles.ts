import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";

export const MenuAdminPortalContainerStyle = styled.div`
    padding-inline: 120px;
    margin-bottom:  10vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media ${breakpoints.md} {
        padding-inline: 60px;
    }
`

export const MenuAdminItens = styled.div`
    display: grid;
    grid-template-columns: 31.4% 31.4% 31.4%;
    gap: 20px;
    width: 700px;
    margin-bottom: 50px;

    @media ${breakpoints.md} {
        width: 100%;
    }
`