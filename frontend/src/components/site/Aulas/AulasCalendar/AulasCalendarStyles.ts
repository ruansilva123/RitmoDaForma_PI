import styled from "styled-components";
import breakpoints from "@/styles/Breakpoints";
import { colors } from "@/styles/Theme";

interface headerAulasCalendarProps {
    "data-isedit"?: boolean
}

export const HeaderAulasCalendar = styled.div<headerAulasCalendarProps>`
    margin: 0 auto;
    &>div{
        border-radius: 10px;
        background-color: ${(props) => ( props["data-isedit"] ? colors.opacityDarkGray_80 : colors.darkRed)};
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

interface aulasCalendarTableProps {
    "data-isedit"?: boolean
}

export const AulasCalendarTable = styled.table<aulasCalendarTableProps>`    
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
        background-color: ${(props) => ( props["data-isedit"] ? colors.opacityDarkGray_80 : colors.darkRed)};
        color: white;
        width: 10%;

        @media ${breakpoints.xs}{
            border: 1px solid ${colors.darkGray};
        }
    }

    td{
        border: 1px solid ${colors.darkGray};
        width: 15%;
        transition: all .3s ease-in-out;
        &:hover{
            background-color: ${colors.lightGrayGradient_40};
        }

        input{
            border: none;
            background-color: transparent;
            text-align: center;
            outline: none;
            color: ${colors.darkGray};
            font-size: clamp(16px, 1.2vw, 1.2rem); 
            width: 100%;
            
            @media ${breakpoints.md} {
                font-size: 16px;
            }

            @media ${breakpoints.bs} {
                font-size: 14px;
            }

            @media ${breakpoints.sm} {
                font-size: 12px;
            }

            @media ${breakpoints.xs}{
                font-size: 10px;
            }
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

export const EditCalendarButtons = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    max-width: 500px;
    margin-inline: 15px;

    @media ${breakpoints.md} {
        margin-inline: 10px;
    }

    @media ${breakpoints.bs} {
        margin-inline: 5px;
    }

    @media ${breakpoints.xs} {
        font-size: 14px;
        margin-inline: 0px;
        border-radius: 0%;
    }

    @media ${breakpoints.lt} {
        font-size: 12px;
    }
`