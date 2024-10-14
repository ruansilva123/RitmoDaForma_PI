import styled from "styled-components";
import { colors } from "../../../styles/Theme";
import breakpoints from "../../../styles/Breakpoints";

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
    
    @media ${breakpoints.md}{
        gap: 10px;
    }

    img{
        width: 30px;

        @media ${breakpoints.bs}{
            width: 25px;
        }
    }
    p{
        font-size: 24px;
        color: ${colors.darkGray};
        @media ${breakpoints.md}{
            font-size: 20px;
        }

        @media ${breakpoints.bs}{
            font-size: 18px;
        }

        @media ${breakpoints.sm}{
            font-size: 16px;
        }
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

        @media ${breakpoints.md} {
            font-size: 16px;
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

        @media ${breakpoints.lt}{
            font-size: 12px;
        }
    }
`

export const AulasCalendarTable = styled.table`    
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

    th{
        background-color: ${colors.darkRed};
        color: white;
        width: 10%;

        @media ${breakpoints.xs}{
            border: 1px solid ${colors.darkGray};
        }
    }

    td{
        border: 1px solid ${colors.darkGray};
        width: 15%;
        &:hover{
            background-color: ${colors.lightGrayGradient_40};
        }
    }

    
    th, td{
        padding-block: 18px;
        border-radius: 10px;
        margin-top: 20px;
        text-align: center;

        @media ${breakpoints.xs}{
            border-radius: 0px;
        }
    }
`

export const Input = styled.input`
    width: 80vh;
    height: 5vh;
    border: solid 1px ${colors.lightGray};
    border-radius: 1vh;
    outline: none;
    padding: 1vh;
    color: ${colors.darkGray};
    background-image: url('assets/svg/SearchIcon.svg');
    background-repeat: no-repeat;
    background-position: 75vh;
    font-size: 18px;

    &::placeholder{
        color: black;
        opacity: 1;
    }
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