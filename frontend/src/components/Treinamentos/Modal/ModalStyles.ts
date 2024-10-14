import styled from "styled-components";
import breakpoints from "../../../styles/Breakpoints";
import { colors } from "../../../styles/Theme";

export const BackgroundBlur = styled.div`
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.lightGrayGradient_20};
    backdrop-filter: blur(3px);
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    width: 100%;
`

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 1vh;
    box-shadow: 1px 1px 5px 5px ${colors.lightGrayGradient_40};
    width: 100vh;
    height: 80vh;

    @media ${breakpoints.sm}{
        width: 40vh;
        height: 40vh;
    }

`

export const Video = styled.div`
    background-color: black;
    border-radius: 1vh;
    width: 85vh;
    height: 40vh;
    margin: 6vh;

    @media ${breakpoints.sm}{
        width: 35vh;
        height: 15vh;
        margin: 2vh;
    }
`

export const ContentModal = styled.div`
    display: flex;
    width: 85vh;
    flex-direction: column;
    align-items: right;

    @media ${breakpoints.sm}{
        width: 35vh;
    }
`

export const RedLine = styled.div`
    width: 85vh;
    height: 1px;
    background-color: ${colors.baseRed};

    @media ${breakpoints.sm}{
        width: 35vh;
    }
    
`

export const TitleModal = styled.div`
    margin-bottom: 2vh;
    font-family: 'Tahoma Bold';
    font-size: 30px;
    color: ${colors.darkGray};

    @media ${breakpoints.sm}{
        font-size: 18px;
    }
`

export const DescriptionModal = styled.div`
    margin-top: 2vh;
    font-family: 'Tahoma';
    text-align: justify;
    font-size: 20px;
    color: ${colors.opacityDarkGray_60};

    @media ${breakpoints.sm}{
        font-size: 16px;
    }
`

export const CloseIcon = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    background-image: url('assets/svg/CloseIcon.svg');
    background-repeat: no-repeat;
    margin-left: 95vh;
    margin-top: 1.5vh;
    cursor: pointer;

    &:hover{
        background-image: url('assets/svg/CloseIconHover.svg')
    }

    @media ${breakpoints.sm}{
        width: 10px;
        height: 10px;
        margin-left: 37vh;
        margin-top: 1vh;
        background-image: url('assets/svg/CloseIconMobile.svg');

        &:hover{ 
            background-image: url('assets/svg/CloseIconMobileHover.svg')
        }
    }
    
`