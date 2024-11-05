import { useEffect, useState } from 'react';
import * as S from "./PricesTableContainerStyles";
import money from "/assets/icons/money.png";
import PriceTable from '../../../components/Aulas/PriceTable/PriceTable';
import LittleBalls from '../../../../components/global/LittleBalls/LittleBalls';

const PricesTableContainer = () => {
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
                <img src={money} alt="Ícone de moedas" width="30px"/>
                <p>Tabela de Preços</p>
            </S.LegendPricesTable>
            <div>
                <S.LinePriceTableContainer>
                    <PriceTable/>

                    {size.width > 800 && 
                        <LittleBalls isVertical/>
                    }
                    <PriceTable/>
                </S.LinePriceTableContainer>
                <S.LinePriceTableContainer>
                    <PriceTable/>
                    {size.width > 800 && 
                        <LittleBalls isVertical/>
                    }
                    <PriceTable/>
                </S.LinePriceTableContainer>
            </div>
        </S.PricesTableContainerStyle>
    );
};

export default PricesTableContainer;