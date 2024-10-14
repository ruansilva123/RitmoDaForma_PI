import styled from "styled-components";
import { colors } from "../../../styles/Theme";
import breakpoints from "../../../styles/Breakpoints";

export const InputSearchStyle = styled.input`
    width: 80vh;
    height: 5vh;
    border: solid 1px ${colors.lightGray};
    border-radius: 1vh;
    outline: none;
    padding: 14px;  
    color: ${colors.darkGray};
    background-image: url('assets/svg/SearchIcon.svg');
    background-repeat: no-repeat;
    background-position: 75vh;
    font-size: 18px;
    
    &:focus{
       background-color: ${colors.lightGrayGradient_20};
    }

    @media ${breakpoints.md}{
        background-position: 40vh;
    }

    @media ${breakpoints.lt}{
        background-position: 22vh;
    }

    @media ${breakpoints.sm}{
        background-position: 42vh;
    }
`
