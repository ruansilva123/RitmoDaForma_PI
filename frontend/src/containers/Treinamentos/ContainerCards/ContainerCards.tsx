import React from 'react';
import * as S from './ContainerCardsStyles';
import Card from '../../../components/Treinamentos/Card/CardTreinamentos';
import InfoCard from '../../../components/global/InfoCard/InfoCard';

interface ContainerCardsProps {
    EditCards?: boolean,
}

const ContainerCards: React.FC<ContainerCardsProps> = ({ EditCards }) => {
    return (
        <S.BackgroundCards>
            <S.ContainerCards>
                <Card></Card>
            </S.ContainerCards>
            {
                EditCards ? 
                    <InfoCard black message="Todo treinamento cadastrado será renderizado na página do usuário!"/>  
                :
                    <InfoCard message="Todos os equipamentos acima estão disponíveis na academia Ritmo da Forma!"/>  
            }   
            
        </S.BackgroundCards>    
    );
};

export default ContainerCards