import React from 'react';
import * as S from "./PricesTableContainerStyles";
import money from "../../../../public/assets/icons/money.png";
import PriceTable from '../../../components/Aulas/PriceTable';
import LittleBalls from '../../../components/global/LittleBalls/LittleBalls';

const PricesTableContainer = () => {
  return (
    <S.PricesTableContainerStyle>
        <S.LegendPricesTable>
            <img src={money} alt="Ícone de moedas" width="35px" height="35px"/>
            <p>Tabela de Preços</p>
        </S.LegendPricesTable>
        <div>
            <S.LinePriceTableContainer>
                <PriceTable/>
                <LittleBalls isVertical/>
                <PriceTable/>
            </S.LinePriceTableContainer>
            <S.LinePriceTableContainer>
                <PriceTable/>
                <LittleBalls isVertical/>
                <PriceTable/>
            </S.LinePriceTableContainer>
        </div>
    </S.PricesTableContainerStyle>
  );
};

export default PricesTableContainer;