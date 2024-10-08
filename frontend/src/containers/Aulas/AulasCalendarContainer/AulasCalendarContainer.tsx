import React from 'react';
import * as S from './AulasCalendarContainerStyles';
import calendar from "../../../../public/assets/icons/calendar.png"

const AulasCalendarContainer = () => {
  return (
    <S.AulasCalendarContainerStyle>
        <S.LegendCalendar>
            <img src={calendar} alt="Ícone de calendário" width="35px" height="35px"/>
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
            <tfoot></tfoot>
        </S.AulasCalendarTable>
    </S.AulasCalendarContainerStyle>
  );
};

export default AulasCalendarContainer;