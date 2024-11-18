import { useEffect, useState } from 'react';
import * as S from "./PricesTableContainerStyles";
import money from "/assets/icons/money.png";
import PriceTable from '@/components/site/Aulas/PriceTable/PriceTable';
import LittleBalls from '@/components/global/LittleBalls/LittleBalls';
import editRed from "/assets/icons/edit-red.png"

interface PricesTableContainer {
    isEdit?: boolean,
}

const PricesTableContainer: React.FC<PricesTableContainer> = ({ isEdit }) => {
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
                    <PriceTable isEdit={isEdit}/>

                    {size.width > 800 && 
                        <LittleBalls isVertical/>
                    }
                    <PriceTable isEdit={isEdit}/>
                </S.LinePriceTableContainer>
                <S.LinePriceTableContainer>
                    <PriceTable isEdit={isEdit}/>
                    {size.width > 800 && 
                        <LittleBalls isVertical/>
                    }
                    <PriceTable isEdit={isEdit}/>
                </S.LinePriceTableContainer>
            </div>
        </S.PricesTableContainerStyle>
    );
};

export default PricesTableContainer;