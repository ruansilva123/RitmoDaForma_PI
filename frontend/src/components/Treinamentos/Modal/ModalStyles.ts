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
    width: 95%;
    height: 100vw;
    min-width: 280px;
    min-height: 350px;
    max-width: 900px;
    max-height: 700px;
    position: relative;

    @media ${breakpoints.sm}{
        height: 400px;
    }
`

export const Video = styled.div`
    background-color: black;
    border-radius: 1vh;
    width: 85%;
    height: 45%;
    margin: 5%;
`

export const ContentModal = styled.div`
    display: flex;
    width: 85%;
    flex-direction: column;
    align-items: right;
`

export const RedLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${colors.baseRed};
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
    width: 25px;
    height: 25px;
    background-image: url('assets/svg/CloseIcon.svg');
    background-repeat: no-repeat;
    margin-left: 93%;
    margin-top: 2%;
    cursor: pointer;
    background-size: cover;

    &:hover{
        background-image: url('assets/svg/CloseIconHover.svg')
    }

    @media ${breakpoints.bs}{
        width: 20px;
        height: 20px;
    }

    @media ${breakpoints.sm}{
        width: 15px;
        height: 15px;
        background-image: url('assets/svg/CloseIconMobile.svg');

        &:hover{ 
            background-image: url('assets/svg/CloseIconMobileHover.svg')
        }
    }

    @media ${breakpoints.xs}{
        width: 12px;
        height: 12px;
        margin-left: 92%;
        margin-top: 3%;
    }
    
`