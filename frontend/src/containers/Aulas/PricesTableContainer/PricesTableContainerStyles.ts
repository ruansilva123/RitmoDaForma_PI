import styled from "styled-components";
import { colors } from "../../../styles/Theme";

export const PricesTableContainerStyle = styled.section`
    margin-top: 100px;
    width: 100%;
    max-width: 1500px;
`;

export const LegendPricesTable = styled.div`
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

export const LinePriceTableContainer = styled.div`
    display: flex;
    gap: 80px;
    margin-bottom: 40px;
    align-items: center;
`