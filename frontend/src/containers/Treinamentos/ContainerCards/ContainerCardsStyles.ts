import styled from "styled-components";
import { colors } from "../../../styles/Theme";
import breakpoints from "../../../styles/Breakpoints";



export const BackgroundCards = styled.div`
    width: 100%;
    top: 102vh;
    position: absolute;

    @media ${breakpoints.bg}{
        top: 105vh;
    }

    @media ${breakpoints.md}{
        top: 97vh;
    }
    
    @media ${breakpoints.sm}{
        top: 85vh;
    }
`

export const ContainerCards = styled.div`
    background-color: white;
    display: grid;
    justify-content: center;
    grid-template-columns: 24% 24% 24%;
    gap: 20px;

    @media ${breakpoints.bg}{
        grid-template-columns: 25% 25% 25%;
        gap: 25px;
    }

    @media ${breakpoints.md}{
        grid-template-columns: 40% 40%;
        gap: 30px;
    }

    @media ${breakpoints.sm}{
        grid: none;
    }
`