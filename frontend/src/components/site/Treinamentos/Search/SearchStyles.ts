import styled from "styled-components";
import { colors } from "../../../../styles/Theme";
import breakpoints from "../../../../styles/Breakpoints";

export const InputSearchStyle = styled.input`
    padding: 18px;
    width: 100%;
    max-width: 800px;
    margin-block: 30px;
    border-radius: 10px;
    border: solid 1px ${colors.lightGray};
    outline: none;
    color: ${colors.darkGray};

    background-image: url('/assets/svg/SearchIcon.svg');
    background-repeat: no-repeat;
    background-position: 97%;
    background-size: 20px;
   
    font-size: 18px;

    &:focus{
       background-color: ${colors.lightGrayGradient_20};
    }

    @media ${breakpoints.bg}{
        width: 100%;
    }

    @media ${breakpoints.md}{
        font-size: 16px;
        background-size: 18px;
    }

    @media ${breakpoints.bs}{
        font-size: 14px;
    }

    @media ${breakpoints.sm}{
        font-size: 14px;
    }
`