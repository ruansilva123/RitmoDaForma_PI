// Libs
import React, { useMemo } from "react";
import * as S from "./CardTreinamentosStyles";

// Contexts
import { useModal } from "@/contexts/ModalProvider";

// Components
import ModalTreinamentosView from "../ModalTreinamentosView/ModalTreinamentosView";
import ModalEditTreinamento from "@/components/admin/EditTreinamentos/ModalEditTreinamento/ModalEditTreinamento";

// Types
import { treinamentosType } from "@/types/types";

//Images
import iconEdit from "/assets/icons/edit.png";

interface CardProps {
    title: string,
    description: string,
    videoEquipment: string,
    imageEquipment: string,
    isEditCards?: boolean,
}

interface appProps {
    isEditCards?: boolean
}

import { useSelector } from 'react-redux';
import { rootStateType } from '@/types/types';

const App: React.FC<appProps> = ({isEditCards}) => { 
    const { datas } = useSelector((state: rootStateType) => state.treinamentos);

    const renderCards = useMemo(() => {
        return (
            <>
                {
                    datas && 
                    datas.map((item: treinamentosType, index: number) => (
                        <Card
                            key={index}
                            title={item.title}
                            description={item.description}
                            videoEquipment={item.videoEquipment}
                            imageEquipment={item.imageEquipment}
                            isEditCards={isEditCards}
                        />
                    ))
                }
            </>
        );
    }, [datas, isEditCards])

    return <>{renderCards}</>;
};

const Card = (props: CardProps) => {
    const { title, description, videoEquipment, imageEquipment, isEditCards } = props;    
    const { openModal, closeModal } = useModal();

    const handleOpenModal = (newContent: treinamentosType) => {
        window.scrollTo({
            top: 0
        });
        setTimeout(() => {
            if(!isEditCards){
                openModal(<ModalTreinamentosView content={newContent} closeModal={closeModal}/>)
            }else{
                openModal(<ModalEditTreinamento content={newContent} closeModal={closeModal}/>)
            }       
        }, .3);
    }

    return (
        <S.ContainerCard onClick={() => handleOpenModal({title, description, videoEquipment, imageEquipment})}>
            {
                isEditCards && 
                <S.IconEditContainer>
                    <img src={iconEdit} alt="Icon de edição" />
                </S.IconEditContainer>
            }
            <S.ImageCard src={imageEquipment} alt={title} />
            <S.ContentCard>
                <S.TitleCard>{title}</S.TitleCard>
                <S.DescriptionCard>{description}</S.DescriptionCard>
            </S.ContentCard>
        </S.ContainerCard>
    );
};

export default App;