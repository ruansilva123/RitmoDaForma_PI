import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const AulasCalendarContainerStyle = styled.section`
    width: 100%;
    max-width: 1500px;
`

export const LegendCalendar = styled.div`
    display: flex;
    gap: 15px;
    justify-content: end;
    padding: 15px;
    align-items: center;
    p{
        font-size: 24px;
        color: ${colors.darkGray};
    }
`

export const HeaderAulasCalendar = styled.div`
    margin: 0 auto;
    &>div{
        border-radius: 10px;
        background-color: ${colors.darkRed};
        color: white;
        
        display: flex; 
        justify-content: center; 
        padding-block: 18px;
        padding-inline: 5%;
        margin-inline: 15px;
        justify-content: space-between;
        font-weight: bold;
        font-size: clamp(18px, 1.5vw, 1.6rem); 
    }
`

export const AulasCalendarTable = styled.table`    
    border-collapse: separate; 
    width: 100%;
    margin: 0 auto;
    border-spacing: 15px; 
    font-size: clamp(14px, 1.2vw, 1.2rem); 

    th{
        background-color: ${colors.darkRed};
        color: white;
    }

    td{
        border: 1px solid ${colors.darkGray};
        &:hover{
            background-color: ${colors.lightGrayGradient_40};
        }
    }

    th, td{
        padding-block: 18px;
        width: 15%;
        border-radius: 10px;
        margin-top: 20px;
        text-align: center;
    }
`