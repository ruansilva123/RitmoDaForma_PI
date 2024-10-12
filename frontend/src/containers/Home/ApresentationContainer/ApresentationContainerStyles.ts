import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";

export const ApresentationContainerStyle = styled.section`
    padding-left: 85px;
    height: 90vh;
    min-height: 520px;
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;

    @media ${breakpoints.md} {
        padding-left: 0px;
    }
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

    @media ${breakpoints.md} {
        width: 100%;
    }
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
    width: 60%;
    z-index: 1;
    margin-bottom: 50px;
    font-size: 18px;

    @media ${breakpoints.md} {
        text-align: center;
        font-size: 16px;
    }

    @media ${breakpoints.md} {
        font-size: 14px;
    }

    @media ${breakpoints.xs} {
        font-size: 12px;
    }
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

    @media ${breakpoints.md} {
        display: none;
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
    bottom: -1px;
    right: 0;
    height: 35%;
    z-index: 0;
`