import React from 'react';
import * as S from "./TableAulasContainerStyles";
import AulasCalendarContainer from '../AulasCalendarContainer/AulasCalendarContainer';
import PricesTableContainer from '../PricesTableContainer/PricesTableContainer';

const TableAulasContainer = () => {
  return (
    <S.TableAulasContainerStyle>
      
      <AulasCalendarContainer/>
      <PricesTableContainer/>
      
    </S.TableAulasContainerStyle>
  );
};

export default TableAulasContainer;