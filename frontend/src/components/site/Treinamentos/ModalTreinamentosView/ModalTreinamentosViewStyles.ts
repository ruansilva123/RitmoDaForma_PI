import styled from "styled-components";
import breakpoints from "../../../../styles/Breakpoints";
import { colors } from "../../../../styles/Theme";

export const ContainerPopUp = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 99;
`

export const BackgroundBlur = styled.div`
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${colors.lightGrayGradient_20};
    backdrop-filter: blur(3px);
    z-index: 99;
`

export const BackgroundPopup = styled.div`
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    width: 100%;
`

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 5px ${colors.lightGrayGradient_40};
    
    width: 55%;
    height: 40vw;
    min-width: 280px;
    max-width: 900px;
    max-height: 700px;
    min-height: 350px;
    position: relative;
    z-index: 100;

    @media ${breakpoints.bg}{
        width: 60%;
        height: 90vh;   
    }

    @media ${breakpoints.md}{
        width: 70%;
        height: 80vh;   
        
    }

    @media ${breakpoints.bs}{
        width: 80%;
        height: 70vh;   
    }

    @media ${breakpoints.sm}{
        width: 90%;
        height: 60vh;   
    }
`

export const Video = styled.div`
    background-color: black;
    border-radius: 10px;
    width: 100%;
    height: 50%;
    margin: 5% 0% 20px 0%;
`

export const ContentModal = styled.div`
    display: flex;
    width: 85%;
    flex-direction: column;
    align-items: right;
    height: 100%;
`

export const RedLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${colors.baseRed};
`

export const TitleModal = styled.div`
    margin-bottom: 10px;
    font-family: 'Tahoma Bold';
    font-size: 20px;
    color: ${colors.darkGray};

    @media ${breakpoints.sm}{
        font-size: 16px;
    }
`

export const DescriptionModal = styled.div`
    margin-top: 10px;
    font-family: 'Tahoma';
    text-align: justify;
    font-size: 14px;
    color: ${colors.opacityDarkGray_60};

    @media ${breakpoints.sm}{
        font-size: 12px;
    }

    @media ${breakpoints.xs} {
        font-size: 10px;
    }
`

export const CloseIcon = styled.div`
    position: absolute;
    width: 18px;
    height: 18px;
    background-image: url('/assets/svg/CloseIcon.svg');
    background-repeat: no-repeat;
    margin-left: 93%;
    margin-top: 2%;
    cursor: pointer;
    background-size: cover;

    &:hover{
        background-image: url('/assets/svg/CloseIconHover.svg')
    }

    @media ${breakpoints.bs}{
        width: 16px;
        height: 16px;
    }

    @media ${breakpoints.sm}{
        width: 14px;
        height: 14px;
        background-image: url('/assets/svg/CloseIconMobile.svg');

        &:hover{ 
            background-image: url('/assets/svg/CloseIconMobileHover.svg')
        }
    }

    @media ${breakpoints.xs}{
        width: 12px;
        height: 12px;
        margin-left: 92%;
        margin-top: 3%;
    }
`