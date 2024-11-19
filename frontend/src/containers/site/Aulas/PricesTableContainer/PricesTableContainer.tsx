// libs
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redix
import { updatePriceAulasTable } from '@/redux/actions/priceAulasTableActions';

// Styles
import * as S from "./PricesTableContainerStyles";

// Components
import PriceTable from '@/components/site/Aulas/PriceTable/PriceTable';
import LittleBalls from '@/components/global/LittleBalls/LittleBalls';

// Images
import money from "/assets/icons/money.png";
import editRed from "/assets/icons/edit-red.png";

// Types
import { rootStateType, paymentType } from '@/types/types';

interface PricesTableContainer {
    isEdit?: boolean,
}

const PricesTableContainer: React.FC<PricesTableContainer> = ({ isEdit }) => {
    const { datas } = useSelector((state: rootStateType) => state.aulasPrice);
    const dispatch = useDispatch();

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => { 
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleEditData = (
        daysForWeek: string, 
        aulasPrice: paymentType
    ) => {
        dispatch(updatePriceAulasTable(daysForWeek, aulasPrice));
    }

    return (
        <S.PricesTableContainerStyle>
            <S.LegendPricesTable>
                {
                    isEdit ?
                        <img src={editRed} alt="Ícone de moedas" width="30px"/>
                    :
                        <img src={money} alt="Ícone de moedas" width="30px"/>
                }
                    
                <p>Tabela de Preços</p>
            </S.LegendPricesTable>
            <div>
                <S.LinePriceTableContainer>
                    <PriceTable handleEditData={handleEditData} aulaPrice={datas[0]} isEdit={isEdit}/> 
                    
                    {size.width > 800 && !isEdit && 
                        <LittleBalls isVertical/>
                    }
                    <PriceTable handleEditData={handleEditData} aulaPrice={datas[1]} isEdit={isEdit}/> 
                </S.LinePriceTableContainer>
                <S.LinePriceTableContainer>
                    <PriceTable handleEditData={handleEditData} aulaPrice={datas[2]} isEdit={isEdit}/> 
                    {size.width > 800 && !isEdit &&
                        <LittleBalls isVertical/>
                    }
                    <PriceTable handleEditData={handleEditData} aulaPrice={datas[3]} isEdit={isEdit}/> 
                </S.LinePriceTableContainer>
            </div>
        </S.PricesTableContainerStyle>
    );
};

export default PricesTableContainer;