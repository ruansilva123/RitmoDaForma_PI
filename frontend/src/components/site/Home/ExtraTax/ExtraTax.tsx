import React from 'react';
import * as S from "./ExtraTaxStyles";

interface ExtraTaxProps {
    price: string,
    titleTax: string,
}

const ExtraTax:React.FC<ExtraTaxProps> = ({price, titleTax}) => {
  return (
    <S.ExtraTaxStyle>
        <S.Price>{price}</S.Price>
        <S.TitleTax>{titleTax}</S.TitleTax>
    </S.ExtraTaxStyle>
  );
};

export default ExtraTax;