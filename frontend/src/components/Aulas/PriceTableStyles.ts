import styled from "styled-components";
import { colors } from "../../styles/Theme";
import breakpoints from "../../styles/Breakpoints";

export const PriceTableStyle = styled.div`
    width: 100%;
`

export const HeaderPriceTable = styled.div`
    margin: 0 auto;
    border-radius: 10px;
    background-color: ${colors.darkRed};
    color: white;
    
    display: flex; 
    justify-content: center;
    padding-block: 18px;
    margin-inline: 15px;
    font-weight: bold;
    font-size: clamp(18px, 1.5vw, 1.6rem); 

    @media ${breakpoints.md} {
        font-size: 18px;
        margin-inline: 10px;
    }

    @media ${breakpoints.bs} {
        font-size: 16px;
        margin-inline: 5px;
    }

    @media ${breakpoints.xs} {
        font-size: 14px;
        margin-inline: 0px;
        border-radius: 0%;
        padding-block: 10px;
    }

    @media ${breakpoints.lt} {
        font-size: 12px;
    }
`

export const BodyPriceTable = styled.table`    
    border-collapse: separate; 
    width: 100%;
    margin: 0 auto;
    border-spacing: 15px; 
    font-size: clamp(16px, 1.2vw, 1.2rem); 

    @media ${breakpoints.md} {
        border-spacing: 10px; 
        font-size: 16px;
    }

    @media ${breakpoints.bs} {
        border-spacing: 5px;
        font-size: 14px;
    }

    @media ${breakpoints.sm} {
        font-size: 12px;
    }

    @media ${breakpoints.xs}{
        font-size: 10px;
        border-collapse: collapse;
        border-spacing: 0px; 
    }

    td{
        border: 1px solid ${colors.darkGray};
        padding-block: 18px;
        width: 15%;
        border-radius: 10px;
        margin-top: 20px;
        text-align: center;
        &:hover{
            background-color: ${colors.lightGrayGradient_40};
        }
    }
`