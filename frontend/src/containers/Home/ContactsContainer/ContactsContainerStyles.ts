import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";

export const ContactsContainerStyle = styled.section`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContentContacts = styled.div`
    padding-inline: 120px;
    padding-top: clamp(150px, 16vw, 15vw);
    padding-bottom: clamp(50px, 7vw, 7vw);
    
    width: 100%;
    max-width: 1500px;
    display: flex;
    gap: 250px;
    align-items: center;

    @media (max-width: 1200px) {
        gap: 5vw;
        padding-right: 10px;
    }

    @media ${breakpoints.md} {
        padding-left: 80px;
    }

    @media ${breakpoints.sm} {
        padding-left: 55px;
    }

    @media ${breakpoints.bs} {
        flex-direction: column;
        gap: 50px;
        align-items: start;
    }

    @media ${breakpoints.xs} {
        align-items: center;
        padding-inline: 15px;
        text-align: center;
    }
`

export const ImageWaveWhite = styled.img`
    position: absolute;
    top: -4px;
    height: 100%;
    right: 0;
    z-index: -1;
`