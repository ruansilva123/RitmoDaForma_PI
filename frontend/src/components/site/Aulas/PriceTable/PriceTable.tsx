// Libs
import { useState } from "react";

// Style
import * as S from "./PriceTableStyles";

// Components
import ButtonModal from "@/components/admin/Modal/ButtonModal/ButtonModal";
import MaskedInput from "@/components/admin/EditAulas/MaskedInput/MaskedInput";

// Type
import { paymentType, priceAulasItemType } from "@/types/types";


interface priceTableProps {
    isEdit?: boolean,
    aulaPrice: priceAulasItemType,
    handleEditData: (daysForWeek: string, aulasPrice: paymentType) => void,
}

const PriceTable: React.FC<priceTableProps> = ({isEdit, aulaPrice, handleEditData}) => {
    const [price, setPrice] = useState(aulaPrice.payment);

    const handleEditPrice = (value: string, index: number) => {
        const newPrice = [...price];

        newPrice[index].price = Number(value);
        setPrice(newPrice);
        handleEditData(aulaPrice.daysForWeek, newPrice[index]);
    }

    return (
        <S.PriceTableStyle>
            <S.HeaderPriceTable data-isedit={isEdit} >
                {aulaPrice.daysForWeek}
            </S.HeaderPriceTable>
            <S.BodyPriceTable>
                <tbody>
                    {price.map((item, index) => (
                        <tr key={index}>
                            <td>{item.paymentForMonth}</td>
                            <td>    
                                <label>
                                    <span>R$ </span>
                                    {
                                        isEdit ? 
                                            <MaskedInput
                                                value={String(item.price.toFixed(2))}
                                                index={index}
                                                onChange={handleEditPrice}
                                            />
                                        :
                                            <input 
                                                type="text"
                                                value={`${String(item.price.toFixed(2))}`} 
                                                disabled 
                                            />
                                    }
                                </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </S.BodyPriceTable>
            {
                isEdit && 
                    <S.EditPriceTableButtons>
                        <ButtonModal value="Editar" onClick={() => {}} />
                        <ButtonModal isCancel value="Cancelar" onClick={() => {}} />
                    </S.EditPriceTableButtons>
            }
        </S.PriceTableStyle>
    );
};

export default PriceTable;
