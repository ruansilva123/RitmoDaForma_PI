import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";

export const SearchAndAddContainerStyle = styled.div`
    
    margin-bottom: 100px;
    padding-inline: 120px;

    background-color: white;
    display: flex;
    justify-content: center;

    @media ${breakpoints.md}{
        padding-inline: 80px;
    }

    @media ${breakpoints.sm}{
        padding-inline: 55px;
    }

    @media ${breakpoints.xs} {
        padding-inline: 15px;
    }
`

export const SearchAndAddContent = styled.div`
    max-width: 1500px;
    width: 100%;
    display: flex;
    gap: 2%;
`

export const SearchContainer = styled.div`
    width: 60%;
`

export const AddTreinamentoContainer = styled.div`
    width: 38%;
    display: flex;
    justify-content: end;
`