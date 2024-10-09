import styled from "styled-components";
import { colors } from "../../styles/Theme";

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
`

export const BodyPriceTable = styled.table`    
    border-collapse: separate; 
    width: 100%;
    margin: 0 auto;
    border-spacing: 15px; 
    font-size: clamp(14px, 1.2vw, 1.2rem); 

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