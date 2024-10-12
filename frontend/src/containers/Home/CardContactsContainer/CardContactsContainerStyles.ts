import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";

export const CardContactsContainerStyle = styled.div`
    width: 100%;
    min-height: 420px;
    display: grid;
    grid-template-columns: 40% 40%;
    justify-content: space-around;

    @media ${breakpoints.bs} {
        grid-template-columns: 55% 45%;
        justify-content: space-between;
    }

    @media ${breakpoints.sm} {
        width: 95%;
        grid-template-columns: 45% 45%;
    }

    @media ${breakpoints.xs} {
        min-height: 320px;
    }
`