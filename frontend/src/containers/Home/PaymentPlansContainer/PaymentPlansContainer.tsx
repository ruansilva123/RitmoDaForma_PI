import * as S from "./PaymentPlansContainerStyles";
import { forwardRef } from "react";
import Subtitle from "../../../components/global/SubTitle/SubTitle";
import CardsPlansContainer from "../CardsPlansContainer/CardsPlansContainer";
import WaveWhite from "../../../../public/assets/svg/WaveWhite.svg";

const PaymentPlansContainer = forwardRef<HTMLDivElement>(
  (props, ref) => {
    return (
      <S.PaymentPlansContainerStyle ref={ref}>
        <S.ContainerTitlePaymentPlans>
          <Subtitle subTitle="Confira nossos" mainTitle="planos!"/>
          <CardsPlansContainer/>
        </S.ContainerTitlePaymentPlans>
        <S.ImageWaveWhite src={WaveWhite}/>
      </S.PaymentPlansContainerStyle>
    );
  }
);

export default PaymentPlansContainer;