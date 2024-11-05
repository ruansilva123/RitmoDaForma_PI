import * as S from "./PaymentPlansContainerStyles";
import { forwardRef } from "react";
import Subtitle from "../../../../components/global/SubTitle/SubTitle";
import CardsPlansContainer from "../CardsPlansContainer/CardsPlansContainer";

const PaymentPlansContainer = forwardRef<HTMLDivElement>(
  (_, ref) => {
    return (
      <>
        <S.PaymentPlansContainerStyle ref={ref}>
          <S.ContainerTitlePaymentPlans>
            <Subtitle subTitle="Confira nossos" mainTitle="planos!"/>
            <CardsPlansContainer/>
          </S.ContainerTitlePaymentPlans>
        </S.PaymentPlansContainerStyle>
      </>
      
    );
  }
);

export default PaymentPlansContainer;