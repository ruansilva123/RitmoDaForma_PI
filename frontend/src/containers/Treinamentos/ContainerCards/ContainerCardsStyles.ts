import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";

export const SectionCards = styled.div`
    background-color: white;
`

export const BackgroundCards = styled.div`    
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10vw;
    padding-inline: 120px;

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

export const ContainerCards = styled.div`
    max-width: 1500px;
    width: 100%;
    display: grid;
    grid-template-columns: 28% 28% 28%;
    gap: 8%;

    margin-bottom: 100px;

    @media ${breakpoints.bg}{
        grid-template-columns: 32% 32% 32%;
        gap: 2%;
    }
     
    @media ${breakpoints.md}{
        gap: 8%;
        grid-template-columns: 46% 46%;
    }

    @media ${breakpoints.bs}{
        gap: 3%;
        grid-template-columns: 49% 49%;
    }

    @media ${breakpoints.sm}{
        grid: none;
    }
`