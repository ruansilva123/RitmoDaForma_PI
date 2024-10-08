import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const ApresentationContainerStyle = styled.section`
    padding-left: 85px;
    height: 90vh;
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
`

export const ApresentationContent = styled.div`
    height: 100%;
    display: flex;
    position: relative;
    caret-color: transparent;
`

export const DescriptionContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    
`

export const Title = styled.h1`
    font-family: "Quicksilver";
`

export const Description = styled.p`
    margin-top: 30px;
    display: flex;
    max-width: 1600px;
    justify-content: center;
    text-align: justify;
    width: 55%;
    z-index: 1;
    margin-bottom: 50px;
    font-size: 1.1rem;
`

export const ImagesExample = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &>div{
        width: 80%;
        max-width: 650px;
        height: 90%;
        display: flex;
        max-height: 700px;
    }
`

export const ImageWomanTrainingContainer = styled.div`
    height: 100%;
    width: 100%;
`

export const ImageManTrainingContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: end;
`

export const ImageWaveWhite = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 35%;
    z-index: 0;
`