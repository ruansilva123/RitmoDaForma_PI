import styled from "styled-components";
import { colors } from "../../../styles/Theme";

interface CardPaymentPlanStyleProps {
    firstCard?: boolean;
}

export const CardPaymentPlanStyle = styled.div<CardPaymentPlanStyleProps>`
    background-color: ${ (props) => ( props.firstCard ? colors.darkRed : colors.lightGray)};
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0,0,0,.25);
    height: 160px;
    width: 25%;
    transition: all .2s ease-in-out;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    color: ${(props) => ( props.firstCard ? "white" : colors.darkGray)};

    *{
        color: ${(props) => (props.firstCard && "white")};
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
    }
`

export const UnitPriceStyle = styled.p`
    font-family: "Quicksilver";
    font-size: 50px;

    &>span{
        font-size: 35px;
    }
`

export const TotalPriceStyle = styled.p`
    color: ${colors.darkRed};
    font-size: 16px;
`
