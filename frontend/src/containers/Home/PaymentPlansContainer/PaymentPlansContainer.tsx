import * as S from "./PaymentPlansContainerStyles";
import { forwardRef } from "react";
import TitleTreinamentos from "../../../components/Treinamentos/TitleTreinamentos/TitleTreinamentos";
import CardsPlansContainer from "../CardsPlansContainer/CardsPlansContainer";
import WaveWhite from "../../../../public/assets/svg/WaveWhite.svg";

const PaymentPlansContainer = forwardRef<HTMLDivElement>(
  (props, ref) => {
    return (
      <S.PaymentPlansContainerStyle ref={ref}>
        <S.ContainerTitlePaymentPlans>
          <TitleTreinamentos subtTitle="Confira nossos" mainTitle="planos!"/>
          <CardsPlansContainer/>
        </S.ContainerTitlePaymentPlans>
        <S.ImageWaveWhite src={WaveWhite}/>
      </S.PaymentPlansContainerStyle>
    );
  }
);

export default PaymentPlansContainer;