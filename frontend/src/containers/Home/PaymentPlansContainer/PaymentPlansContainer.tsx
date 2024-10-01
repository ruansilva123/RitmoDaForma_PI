import * as S from "./PaymentPlansContainerStyles";
import React, { forwardRef } from "react";

const PaymentPlansContainer = forwardRef<HTMLDivElement>(
  (props, ref) => {
    return (
      <S.PaymentPlansContainerStyle ref={ref}>
      </S.PaymentPlansContainerStyle>
    );
  }
);

export default PaymentPlansContainer;