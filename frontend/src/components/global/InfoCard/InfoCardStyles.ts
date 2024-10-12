import styled from "styled-components";
import { colors } from "../../../styles/Theme";
import breakpoints from "../../../styles/Breakpoints";

export const BackgroundContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const ContainerInfo = styled.div`
    display: flex;
    justify-content: center;
    border: solid 1px ${colors.lightGray};
    border-radius: 10px;
    color: ${colors.darkGray};
    padding: 18px;
    width: 700px;
    margin-block: 30px;
    position: relative;
    
    @media ${breakpoints.md}{
        width: 100%;
        margin-inline: 15px;
        font-size: 16px;
    }

    @media ${breakpoints.bs}{
        font-size: 14px;
    }

    @media ${breakpoints.sm}{
        font-size: 12px;
    }

    @media ${breakpoints.xs}{
        margin-inline: 15px;
    }
`

export const IconInfo = styled.img`
    position: absolute;
    background-repeat: no-repeat;
    width: 30px;
    top: -18%;
    right: -1.5%;


    @media ${breakpoints.bs}{
        width: 25px;
    }

    @media ${breakpoints.sm}{
        right: -2%;
    }

    @media ${breakpoints.xs}{
        width: 20px;
        right: -2%;
    }
`