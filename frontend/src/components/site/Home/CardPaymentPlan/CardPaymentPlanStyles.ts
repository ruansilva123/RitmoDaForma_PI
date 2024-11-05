import styled from "styled-components";
import { colors } from "../../../../styles/Theme";
import breakpoints from "../../../../styles/Breakpoints";

interface CardPaymentPlanStyleProps {
    "data-firstcard"?: boolean;
}

export const CardPaymentPlanStyle = styled.div<CardPaymentPlanStyleProps>`
    background-color: ${ (props) => ( props["data-firstcard"] ? colors.darkRed : colors.lightGray)};
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0,0,0,.25);
    height: 160px;
    width: 24.4%;
    min-width: 280px;
    transition: all .2s ease-in-out;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    color: ${(props) => ( props["data-firstcard"] ? "white" : colors.darkGray)};

    @media ${breakpoints.bs} {
        min-width: 210px;
    }

    @media ${breakpoints.sm} {
        min-width: 160px;
        height: 100px;
        align-items: center;
        justify-content: center;
        padding: 0px;
    }

    @media ${breakpoints.xs} {
        min-width: 140px;
    }

    @media ${breakpoints.lt} {
        min-width: 130px;
    }

    *{
        color: ${(props) => (props["data-firstcard"] && "white")};
    }

    &:hover{
        background-color: ${colors.darkRed};

        *{
            color: white;
        }
    }

`

export const TitlePlanStyle = styled.h3`
    font-family: "Tahoma";
    font-size: 20px;
    &>span{
        color: ${colors.darkRed};
        font-family: "QuickSilver";
        font-size: 16px;
        margin-left: 10px;

        @media ${breakpoints.bs} {
            font-size: 14px;
        }

        @media ${breakpoints.xs} {
        font-size: 12px;
    }
    }

    @media ${breakpoints.md} {
        font-size: 18px;
    }

    @media ${breakpoints.bs} {
        font-size: 16px;
    }

    @media ${breakpoints.sm} {
        font-size: 14px;
    }

    @media ${breakpoints.xs} {
        font-size: 12px;
    }
`

export const UnitPriceStyle = styled.p`
    font-family: "Quicksilver";
    font-size: 50px;

    &>span{
        font-size: 35px;
        @media ${breakpoints.md} {
            font-size: 30px;
        }

        @media ${breakpoints.sm} {
            font-size: 20px;
        }

        @media ${breakpoints.xs} {
            font-size: 18px;
        }
    }

    @media ${breakpoints.md} {
        font-size: 40px;
    }

    @media ${breakpoints.bs} {
        font-size: 30px;
    }

    @media ${breakpoints.sm} {
        font-size: 24px;
    }

    @media ${breakpoints.sm} {
        font-size: 20px;
    }
`

export const TotalPriceStyle = styled.p`
    color: ${colors.darkRed};
    font-size: 16px;

    @media ${breakpoints.bs} {
        font-size: 14px;
    }

    @media ${breakpoints.xs} {
        font-size: 12px;
    }
`
