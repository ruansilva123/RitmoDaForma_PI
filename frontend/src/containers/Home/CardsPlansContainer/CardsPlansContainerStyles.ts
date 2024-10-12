import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";

export const CardsPlansContainerStyle = styled.div`
    margin-top: 100px;
    @media ${breakpoints.sm} { 
        margin-top: 50px;
    }
`

export const CardsList = styled.div`

`

export const CardsLine = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-block: 10px;
    flex-wrap: wrap;
`

export const ExtraTaxContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 945px;
    margin: 30px auto;
    
    @media (max-width: 1100px) { 
        width: 570px;
    }

    @media ${breakpoints.bs} { 
        flex-direction: column;
        width: 430px;
    }

    @media ${breakpoints.sm} { 
        width: 340px;
    }

    @media ${breakpoints.sm} { 
        width: 265px;
    }
`