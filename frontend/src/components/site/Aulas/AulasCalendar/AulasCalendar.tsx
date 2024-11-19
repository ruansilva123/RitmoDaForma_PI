// Redux
import { updateAulaCalendar } from '@/redux/actions/aulasCalendarActions';

// Libs
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

// Components
import ButtonModal from "@/components/admin/Modal/ButtonModal/ButtonModal";

// Style
import * as S from "./AulasCalendarStyles";

// Types
import { rootStateType } from '@/types/types';
import { aulasCalendarType } from "@/types/types";
import { ChangeEvent } from "react";

interface AulasCalendarProps {
    isEdit?: boolean,
}

const AulasCalendar: React.FC<AulasCalendarProps> = ({ isEdit }) => {
    const dispatch = useDispatch();
    const { datas } = useSelector((state: rootStateType) => state.aulas);
    const [ newDatasCalendar, setNewDatasCalendar ] = useState<aulasCalendarType[]>(datas);

    const handleEditData = (
        event: ChangeEvent<HTMLInputElement>, 
        indexAula: number, 
        indexWeek: number 
    ) => {
        const { value } = event.target;
        const updatedCalendar = [...newDatasCalendar];

        updatedCalendar[indexWeek] = {
            ...updatedCalendar[indexWeek],
            aulas: updatedCalendar[indexWeek].aulas.map((aula, index) => (
                index === indexAula ? value : aula
            )),
        }
        
        setNewDatasCalendar(updatedCalendar); 
        dispatch(updateAulaCalendar(
            updatedCalendar[indexWeek].hour, 
            updatedCalendar[indexWeek].aulas
        ));    
    }

    return (
        <>
            <S.HeaderAulasCalendar data-isedit={isEdit}>
                <div>
                    <span>Seg</span>
                    <span>Ter</span>
                    <span>Qua</span>
                    <span>Qui</span>
                    <span>Sex</span>
                    <span>Horário</span>
                </div>
            </S.HeaderAulasCalendar>
            <S.AulasCalendarTable data-isedit={isEdit}>
                <tbody>
                    {   
                        newDatasCalendar && 
                        newDatasCalendar.map((item, indexWeek) => (
                            <tr key={item.hour}>
                                <th>{item.hour}</th>
                                {item.aulas.map((aula, indexAula) => (
                                    <td key={indexAula}>
                                        <label >
                                            {
                                                isEdit ? 
                                                    <input 
                                                        value={aula} 
                                                        onChange={
                                                            (e) => {
                                                                handleEditData(e, indexAula, indexWeek)
                                                            }} 
                                                    />
                                                :
                                                    <input value={aula} disabled />
                                            }
                                        </label>
                                    </td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </S.AulasCalendarTable>
            {
                isEdit && 
                    <S.EditCalendarButtons>
                        <ButtonModal value="Editar" onClick={() => {}} />
                        <ButtonModal value="Cancel" isCancel onClick={() => {}} />
                    </S.EditCalendarButtons>
            }
        </>
    );
};

export default AulasCalendar;