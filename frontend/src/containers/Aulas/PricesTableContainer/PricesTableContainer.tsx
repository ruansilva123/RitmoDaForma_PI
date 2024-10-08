import React from 'react';
import * as S from "./PricesTableContainerStyles";
import money from "../../../../public/assets/icons/money.png";

const PricesTableContainer = () => {
  return (
    <S.PricesTableContainerStyle>
        <S.LegendPricesTable>
            <img src={money} alt="Ícone de moedas" width="35px" height="35px"/>
            <p>Tabela de Preços</p>
        </S.LegendPricesTable>
    </S.PricesTableContainerStyle>
  );
};

export default PricesTableContainer;