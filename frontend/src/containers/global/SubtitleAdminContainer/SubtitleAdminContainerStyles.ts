import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";
import { colors } from "../../../styles/Theme";

export const SubtitleAdminContainerStyle = styled.div`
    position: relative;
    min-height: 100px;
    height: 100%;
    margin-bottom: 100px;
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

export const TextAdminContainer = styled.div`
    padding-top: 10%; 
    margin-top: clamp(50px, 36vh, 36vh);
    width: 100%;
    display: flex;
    justify-content: center;
    
`

export const SubtitleAdmin = styled.h2`
    width: 100%;
    font-family: 'Tahoma', 'Arial', 'Sans-serif';
    font-weight: 100;
    font-size: 30px;
    color: ${colors.darkGray};
    max-width: 1500px;
    @media ${breakpoints.md}{
        font-size: 26px;
    }
`

