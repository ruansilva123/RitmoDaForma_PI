import React from 'react';
import * as S from './ContainerCardsStyles';
import Card from '../../../components/Treinamentos/Card/CardTreinamentos';
import LittleBalls from '../../../components/global/LittleBalls/LittleBalls';
import InfoCard from '../../../components/global/InfoCard/InfoCard';


const ContainerCards = () => {
    return (
        <S.BackgroundCards>
            <S.ContainerCards>
                <Card></Card>
            </S.ContainerCards>
            <InfoCard message="Todos os equipamentos acima estão disponíveis na academia Ritmo da Forma!"/>
        </S.BackgroundCards>
    );
};

export default ContainerCards