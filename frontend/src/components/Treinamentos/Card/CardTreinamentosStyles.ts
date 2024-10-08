
import styled from "styled-components";
import { colors } from "../../../styles/Theme";


export const ContainerCard = styled.div`
    border: 1px solid ${colors.lightGray}; 
    border-radius: 1vh;
    margin: 5vh;
    width: 40vh;
    height: 35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &:hover{
        border: 2px solid ${colors.lightRed}; 
    }
`

export const ImageCard = styled.img`
    background-color: black;
    border-radius: 1vh;
    margin: 2vh;
    width: 35vh;
    height: 15vh;
`
export const ContentCard = styled.div`
    display: flex;
    width: 35vh;
    flex-direction: column;
    align-items: right;
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