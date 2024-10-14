import { useState } from "react";
import * as S from "./CardsPlansContainerStyles";
import CardPaymentPlan from '../../../components/Home/CardPaymentPlan/CardPaymentPlan';
import ExtraTax from '../../../components/Home/ExtraTax/ExtraTax';

const CardsPlansContainer = () => {

  const [firstCardIsValid, setFirstCardIsValid] = useState<boolean>(true);

  const handleChangeFirstCard = (isHover: boolean) => {
    if(isHover){
      setFirstCardIsValid(true);
    }else{
      
      setFirstCardIsValid(false);
    }
  }

  return (
    <S.CardsPlansContainerStyle>
      <div>
        <S.CardsLine>
          <CardPaymentPlan handleChangeFirstCard={handleChangeFirstCard} firstCard={firstCardIsValid} titlePlan="Mensal" unitPrice="r$100,00" totalPrice="" />
          <CardPaymentPlan handleChangeFirstCard={handleChangeFirstCard} titlePlan="Família" unitPrice="r$90,00" totalPrice="" />
          <CardPaymentPlan handleChangeFirstCard={handleChangeFirstCard} titlePlan="Promocional" unitPrice="r$80,00" totalPrice="" />
          <CardPaymentPlan handleChangeFirstCard={handleChangeFirstCard} titlePlan="10 Meses" unitPrice="r$70,00" totalPrice="Total: 700,00R$" parcelValue="10x de"/>
        </S.CardsLine>
        <S.CardsLine>
          <CardPaymentPlan handleChangeFirstCard={handleChangeFirstCard} titlePlan="Trimestral" unitPrice="r$85,00" totalPrice="Total: 255,00R$" parcelValue="3x de"/>
          <CardPaymentPlan handleChangeFirstCard={handleChangeFirstCard} titlePlan="Semestral" unitPrice="r$80,00" totalPrice="Total: 480,00R$" parcelValue="6x de"/>
          <CardPaymentPlan handleChangeFirstCard={handleChangeFirstCard} titlePlan="Anual" unitPrice="r$70,00" totalPrice="Total: 840,00R$" parcelValue="12x de"/>
        </S.CardsLine>
      </div>
      <S.ExtraTaxContainer>
        <ExtraTax price="r$15,00" titleTax="Taxa de inscrição" />
        <ExtraTax price="r$15,00" titleTax="Aula avulsa"/>
      </S.ExtraTaxContainer>
    </S.CardsPlansContainerStyle>
  );
};

export default CardsPlansContainer;