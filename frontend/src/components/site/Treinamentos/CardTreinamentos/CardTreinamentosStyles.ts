
import styled from "styled-components";
import { colors } from "@/styles/Theme";
import breakpoints from "@/styles/Breakpoints";

export const IconEditContainer = styled.div`
    background-color: ${colors.lightGray};
    width: 55px;
    height: 55px;
    position: absolute;
    border-radius: 50%;
    top: -20px;
    right: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;

    @media ${breakpoints.bg}{
        width: 50px;
        height: 50px;
        top: -15px;
        right: -15px;
        
        &>img{
            width: 20px;
            height: 20px;
        }
    }    
`

export const ContainerCard = styled.div`
    display: flex;
    border: 1px solid ${colors.lightGray}; 
    border-radius: 10px;
    height: 34vw;
    max-height: 400px;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    position: relative;

    @media ${breakpoints.bg}{
        height: 28vw;
    }

    @media ${breakpoints.md}{
        height: 300px;
    }
    
    @media ${breakpoints.sm}{
        width: 100%;
        height: 350px;
    }

    transition: all .2s ease-in-out;

    &:hover{
        border: 2px solid ${colors.lightRed}; 
        
    }

    &:hover ${IconEditContainer}{
        background-color: white;
    }
`

export const ImageCard = styled.img`
    background-color: black;
    border-radius: 10px;
    margin-block: 20px;
    height: 40%;
    width: 85%;
    object-fit: cover;
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
    color: ${colors.opacityDarkGray_60};
`

