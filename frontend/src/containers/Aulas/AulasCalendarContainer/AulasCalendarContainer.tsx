import React from 'react';
import * as S from './AulasCalendarContainerStyles';
import calendar from "../../../../public/assets/icons/calendar.png"
import InfoCard from '../../../components/global/InfoCard/InfoCard';

const AulasCalendarContainer = () => {
  return (
    <S.AulasCalendarContainerStyle>
        <S.LegendCalendar>
            <img src={calendar} alt="Ícone de calendário"/>
            <p>Calendário das Aulas</p>
        </S.LegendCalendar>
        <S.HeaderAulasCalendar>
            <div>
                <span>Seg</span>
                <span>Ter</span>
                <span>Qua</span>
                <span>Qui</span>
                <span>Sex</span>
                <span>Horário</span>
            </div>
        </S.HeaderAulasCalendar>
        <S.AulasCalendarTable>
            <tbody>
                <tr>
                    <th>07:00</th>
                    <td>Funcional</td>
                    <td>Funcional</td>
                    <td>Funcional</td>
                    <td>Funcional</td>
                    <td>Funcional</td>
                </tr>
                <tr>
                    <th>12:00</th>
                    <td>Funcional</td>
                    <td>Funcional</td>
                    <td>Funcional</td>
                    <td>Funcional</td>
                    <td>Funcional</td>
                </tr>
                <tr>
                    <th>15:00</th>
                    <td>Funcional</td>
                    <td>Funcional</td>
                    <td>Funcional</td>
                    <td>Funcional</td>
                    <td>Funcional</td>
                </tr>
                <tr>
                    <th>18:00</th>
                    <td>Funcional</td>
                    <td>Funcional</td>
                    <td>Funcional</td>
                    <td>Funcional</td>
                    <td>Funcional</td>
                </tr>
            </tbody>
        </S.AulasCalendarTable>
        <InfoCard message="Fique atento nas mudanças de calendário de cada aula!"/>
    </S.AulasCalendarContainerStyle>
  );
};

export default AulasCalendarContainer;