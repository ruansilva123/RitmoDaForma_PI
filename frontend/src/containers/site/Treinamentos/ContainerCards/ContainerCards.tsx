import React from 'react';
import * as S from './ContainerCardsStyles';
import Card from '@/components/site/Treinamentos/CardTreinamentos/CardTreinamentos';
import InfoCard from '@/components/global/InfoCard/InfoCard';

interface ContainerCardsProps {
    isEditCards?: boolean,
}

const ContainerCards: React.FC<ContainerCardsProps> = ({ isEditCards }) => {
    return (
        <S.BackgroundCards>
            <S.ContainerCards>
                <Card></Card>
            </S.ContainerCards>
            {
                isEditCards ? 
                    <InfoCard black message="Toda operação nesta sessão irá refletir na página do usuário!"/>  
                :
                    <InfoCard message="Todos os equipamentos acima estão disponíveis na academia Ritmo da Forma!"/>  
            }   
            
        </S.BackgroundCards>    
    );
};

export default ContainerCards