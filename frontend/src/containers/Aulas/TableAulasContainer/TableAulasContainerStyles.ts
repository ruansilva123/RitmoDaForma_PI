import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";

export const TableAulasContainerStyle = styled.div`
    margin-top: 100px;

    @media ${breakpoints.sm} { 
        margin-top: 50px;
    }

    padding-bottom: 10vw;
    padding-inline: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${breakpoints.md} {
        padding-inline: 60px;
    }

    @media ${breakpoints.bs} {
        padding-inline: 10px;
    }

    @media ${breakpoints.sm} {
        padding-inline: 5px;
    }

    @media ${breakpoints.xs} {
        padding-inline: 0px;
    }
`