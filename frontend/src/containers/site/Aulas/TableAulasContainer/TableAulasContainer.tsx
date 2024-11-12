import * as S from "./TableAulasContainerStyles";
import AulasCalendarContainer from '../AulasCalendarContainer/AulasCalendarContainer';
import PricesTableContainer from '../PricesTableContainer/PricesTableContainer';

interface TableAulasContainerProps {
  isEdit: boolean
}

const TableAulasContainer: React.FC<TableAulasContainerProps> = ({ isEdit }) => {
  return (
    <S.TableAulasContainerStyle>
      <AulasCalendarContainer isEdit={isEdit} />
      <PricesTableContainer isEdit={isEdit} />
    </S.TableAulasContainerStyle>
  );
};

export default TableAulasContainer;