import * as S from './AulasCalendarContainerStyles';
import calendar from "/assets/icons/calendar.png";
import InfoCard from '@/components/global/InfoCard/InfoCard';
import AulasCalendar from '@/components/site/Aulas/AulasCalendar/AulasCalendar';
import editRed from "/assets/icons/edit-red.png"


interface AulasCalendarContainer {
  isEdit?: boolean,
}

const AulasCalendarContainer: React.FC<AulasCalendarContainer> = ({ isEdit }) => {
  return (
    <S.AulasCalendarContainerStyle>
        <S.LegendCalendar>
          {
            isEdit ?
              <img src={editRed} alt="Ícone de calendário"/>
            :
              <img src={calendar} alt="Ícone de calendário"/>
          }
            
            <p>Calendário das Aulas</p>
        </S.LegendCalendar>
        <AulasCalendar isEdit={isEdit}/>
        {
          !isEdit &&
            <InfoCard message="Fique atento nas mudanças de calendário de cada aula!"/>
        }
    </S.AulasCalendarContainerStyle>
  );
};

export default AulasCalendarContainer;