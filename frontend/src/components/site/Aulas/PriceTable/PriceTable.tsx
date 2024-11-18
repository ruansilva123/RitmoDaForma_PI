import * as S from "./PriceTableStyles";
import ButtonModal from "@/components/admin/Modal/ButtonModal/ButtonModal";
import ButtonCancel from "@/components/admin/Modal/ButtonCancel/ButtonCancel";

interface priceTableProps {
    isEdit?: boolean,
}

const PriceTable: React.FC<priceTableProps> = ({isEdit}) => {
  return (
    
    <S.PriceTableStyle>
        <S.HeaderPriceTable data-isedit={isEdit} >
            2 Aulas Semanais
        </S.HeaderPriceTable>
        <S.BodyPriceTable>
            <tbody>
                <tr>
                    <td>Semestral</td>
                    <td>R$ 130,00</td>
                </tr>
                <tr>
                    <td>Trimestral</td>
                    <td>R$ 140,00</td>
                </tr>
                <tr>
                    <td>Mensal</td>
                    <td>R$ 160,00</td>
                </tr>
            </tbody>
        </S.BodyPriceTable>
        {
            isEdit && 
                <S.EditPriceTableButtons>
                    <ButtonModal value="Editar" onClick={() => {}} />
                    <ButtonCancel onClick={() => {}} />
                </S.EditPriceTableButtons>
        }
    </S.PriceTableStyle>
    
  );
};

export default PriceTable;