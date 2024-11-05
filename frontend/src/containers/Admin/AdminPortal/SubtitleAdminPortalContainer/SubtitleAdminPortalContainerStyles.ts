import styled from "styled-components";
import breakpoints from "../../../../styles/Breakpoints";
import { colors } from "../../../../styles/Theme";

export const SubtitleAdminPortalContainerStyle = styled.div`
    position: relative;
    min-height: 100px;
    height: 100%;
    margin-bottom: 100px;
`

export const ImageWaveWhite = styled.img`
    position: absolute;
    bottom: 99%;
    right: 0;
    height: 40vh;
    min-height: 200px;
`

export const TextAdminPortalContainer = styled.div`
    padding-top: 10%; 
    margin-top: clamp(50px, 36vh, 36vh);
    text-align: center;
    display: flex;
    justify-content: center;
`

export const SubtitleAdminPortal = styled.h2`
    font-family: 'Tahoma', 'Arial', 'Sans-serif';
    font-weight: 100;
    font-size: 30px;
    color: ${colors.darkGray};

    @media ${breakpoints.md}{
        font-size: 26px;
    }
`

