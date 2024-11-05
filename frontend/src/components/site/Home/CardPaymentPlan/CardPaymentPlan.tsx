import React from 'react';
import * as S from "./CardPaymentPlanStyles"

interface CardPaymentPlan {
  firstCard?: boolean,
  titlePlan: string,
  unitPrice: string,
  parcelValue?: string,
  handleChangeFirstCard: (isHover: boolean) => void;
}

const CardPaymentPlan:React.FC<CardPaymentPlan>  = ({handleChangeFirstCard, titlePlan, unitPrice, parcelValue, firstCard}) => {
  const currency = unitPrice.slice(0, 2);
  const price = unitPrice.slice(2, -2)
  const decimalValue = unitPrice.slice(-2);

  return (
    <S.CardPaymentPlanStyle data-firstcard={firstCard} onMouseOver={() => handleChangeFirstCard(false)} onMouseLeave={() => handleChangeFirstCard(true)} >
      <S.TitlePlanStyle>{titlePlan} <span>{parcelValue}</span></S.TitlePlanStyle>
      <S.UnitPriceStyle>
        <span>{currency}</span>
        {price}
        <span>{decimalValue}</span>
      </S.UnitPriceStyle>
    </S.CardPaymentPlanStyle>
  );
};

export default CardPaymentPlan;