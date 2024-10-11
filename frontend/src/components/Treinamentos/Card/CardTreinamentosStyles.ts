
import styled from "styled-components";
import { colors } from "../../../styles/Theme";
import breakpoints from "../../../styles/Breakpoints";


export const ContainerCard = styled.div`
    display: flex;
    border: 1px solid ${colors.lightGray}; 
    border-radius: 1vh;
    height: 35vh;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &:hover{
        border: 2px solid ${colors.lightRed}; 
    }

    @media ${breakpoints.bg}{
        margin: 0;
    }
    
    @media ${breakpoints.md}{
        margin: 4vh;
    }
`

export const ImageCard = styled.img`
    background-color: black;
    border-radius: 1vh;
    margin: 2vh;
    height: 15vh;

    width: 85%;
`
export const ContentCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: right;

    width: 85%;
`
export const TitleCard = styled.div`
    font-family: 'Tahoma Bold';
    font-size: 20px;
    color: ${colors.darkGray};

`
export const DescriptionCard = styled.div`
    margin-top: 1vh;
    font-family: 'Tahoma';
    font-size: 14px;
    color: ${colors.opacityDarkGray_60}
`