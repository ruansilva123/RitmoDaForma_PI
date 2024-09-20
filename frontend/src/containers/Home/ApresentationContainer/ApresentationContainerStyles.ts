import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const ApresentationContainerStyle = styled.section`
    height: 90vh;
    width: 100vw;
    display: flex;
    position: relative;
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

export const Description = styled.div`
    margin-top: 50px;
    display: flex;
    max-width: 700px;

    justify-content: center;
    &>p{
        text-align: justify;
        width: 55%;
    }
`

export const TitleRitmoDown = styled.div`
    transform: rotate(180deg);
    transform: scaleY(-1);
    margin: 0;
    padding: 0;
    background: ${colors.gradientRed};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: brightness(1.1);
    text-align: center;
`

export const TitleRitmoUp = styled.div`
    margin-bottom: -25px;
    background: ${colors.gradientWhiteToGray};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
`

export const TitleRitmo = styled.div`
    font-size: 110px;
`

export const DaForma = styled.div`
    font-size: 45px;
    font-family: "RacingSansOne";
    text-align: center;
    margin-top: -15px;
`

export const ImagesExample = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &>div{
        width: 80%;
        max-width: 600px;
        height: 90%;
        display: flex;
        max-height: 500px;
    }
`

export const ImageWomanTrainingContainer = styled.div`
    height: 100%;
    width: 100%;

    &>img{
        max-width: 200px;
        width: 80%;
        height: auto;
        box-shadow: 5px 5px 5px rgba(0,0,0,.3);
        border-radius: 30px;
    }
`

export const ImageManTrainingContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: end;

    &>img{
        max-width: 200px;
        width: 80%;
        height: auto;
        box-shadow: 5px 5px 5px rgba(0,0,0,.3);
        border-radius: 30px;
    }
`

export const ImageWaveWhite = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 35%;
`