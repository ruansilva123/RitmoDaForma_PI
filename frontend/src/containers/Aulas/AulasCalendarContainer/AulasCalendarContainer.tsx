import React from 'react';
import * as S from './AulasCalendarContainerStyles';
import calendar from "../../../../public/assets/icons/calendar.png";
import InfoCard from '../../../components/global/InfoCard/InfoCard';
import AulasCalendar from '../../../components/Aulas/AulasCalendar/AulasCalendar';

const AulasCalendarContainer = () => {
  return (
    <S.AulasCalendarContainerStyle>
        <S.LegendCalendar>
            <img src={calendar} alt="Ícone de calendário"/>
            <p>Calendário das Aulas</p>
        </S.LegendCalendar>
        <AulasCalendar/>
        <InfoCard message="Fique atento nas mudanças de calendário de cada aula!"/>
    </S.AulasCalendarContainerStyle>
  );
};

export default AulasCalendarContainer;