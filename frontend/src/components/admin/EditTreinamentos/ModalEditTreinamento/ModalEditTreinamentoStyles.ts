import styled from "styled-components";
import breakpoints from "@/styles/Breakpoints";
import { colors } from "@/styles/Theme";

export const ModalContent = styled.div`
    padding: 50px;
    width: 80%;
    height: 100%;
`

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 5px ${colors.lightGrayGradient_20};
    
    width: 55%;
    max-width: 900px;
    position: relative;
    z-index: 100;
    
    @media ${breakpoints.bg}{
        width: 60%;
    }

    @media ${breakpoints.md}{
        width: 70%;   
    }
`

export const ContainerPopUp = styled.div`
    position: absolute;
    width: 100%;
    height: 1200px;
    top: 0;
    z-index: 99;
`

export const BackgroundBlur = styled.div`
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${colors.darkGrayOpacity_10};
    backdrop-filter: blur(3px);
    z-index: 99;
    position: fixed;
`

export const BackgroundPopup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const FormModal = styled.form`
    padding-top: 30px;
`

export const Description = styled.p`
    font-size: 18px;
    text-align: center;
    margin-top: 20px;
    color: ${colors.opacityDarkGray_80};
`

export const ContainerButtonsForm = styled.div`
    padding-top: 30px;
`

export const UploadInputLabel = styled.label`
    display: block;
    height: 60px;
    resize: none;
    border-radius: 10px;
    border: 1px solid ${colors.lightGray};
    color: rgba(54,54,57,.7);
    
    outline: none;
    padding: 10px;
    font-size: 16px;
    margin-top: 30px;
    position: relative;
    display: flex;
    align-items: center;
    padding-inline-start: 60px;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: ${colors.lightGrayGradient_40};   
    }

    &:focus-within {
        background-color: ${colors.lightGrayGradient_40};   
    }
`

export const InputFile = styled.input`
    display: none;
`

export const IconUpload = styled.img`
    position: absolute;
    top: 32%;
    left: 10px;
    width: 30px;
`

export const UploadVideo = styled.input`
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-size: 16px;
    ::placeholder{
        color: ${colors.darkGray};
        opacity: 1; 
    }
`