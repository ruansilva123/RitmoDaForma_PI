import React from 'react';
import * as S from "./AulasCalendarStyles";
import { useSelector } from 'react-redux';
// import { updateAulaCalendar } from '../../../redux/actions/aulasCalendarActions';
import { rootStateType } from '../../../types/types';

const AulasCalendar = () => {
    // const dispatch = useDispatch();
    const { datas } = useSelector((state: rootStateType) => state.aulas);

    // const handleUpdateAula = (hour: string) => {
    //     const newAulas = ['Yoga', 'Pilates', 'Funcional', 'Dança', 'Crossfit'];
    //     dispatch(updateAulaCalendar(hour, newAulas));
    // };

    return (
        <>
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
                    {   
                        datas && 
                        datas.map((item) => (
                            <tr key={item.hour}>
                                <th>{item.hour}</th>
                                {item.aulas.map((aula) => (
                                    <td>
                                        {aula}
                                    </td>
                                ))}
                            </tr>
                        ))
                    }
                    {/* <tr>
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
                    </tr> */}
                </tbody>
            </S.AulasCalendarTable>
        </>
    );
};

export default AulasCalendar;