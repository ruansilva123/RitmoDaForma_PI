import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";

export const SectionCards = styled.div`
    background-color: white;
`

export const BackgroundCards = styled.div`
    width: 100%;
`

export const ContainerCards = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 18% 18% 18%;
    gap: 5vw;

    @media ${breakpoints.bg}{
        grid-template-columns: 22% 22% 22%;
        gap: 5vw;
    }
     
    @media ${breakpoints.md}{
        grid-template-columns: 300px 300px;
        gap: 30px;
    }

    @media ${breakpoints.sm}{
        grid: none;
        gap: 1vh;
    }
`