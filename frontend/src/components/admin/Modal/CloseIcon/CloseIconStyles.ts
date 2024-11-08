import styled from "styled-components";
import breakpoints from "@/styles/Breakpoints";

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