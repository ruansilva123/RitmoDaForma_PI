// Libs
import React, { useState } from "react";
import * as S from "./CardTreinamentosStyles";

// Contexts
import { useModal } from "@/contexts/ModalProvider";

// Components
import ModalTreinamentosView from "../ModalTreinamentosView/ModalTreinamentosView";
import ModalEditTreinamento from "@/components/admin/EditTreinamentos/ModalEditTreinamento/ModalEditTreinamento";

// Types
import { contentModal } from "@/types/types";

//Images
import iconEdit from "/assets/icons/edit.png";

interface CardProps {
    title: string;
    desc: string;
    image: string;
    video: string;
    isEditCards: boolean;
}

interface appProps {
    isEditCards?: boolean
}

const App: React.FC<appProps> = ({isEditCards}) => {
    console.log(isEditCards) 

    const [treinos] = useState([
        {
            title: "Halteres",
            desc: "Fortalecimento dos músculos e flexibilidade",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
        {
            title: "Barra Olímpica",
            desc: "Rebeca Andrade",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
        {
            title: "Bicicleta Ergonômica",
            desc: "AAAAAA",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
        {
            title: "Bicicleta Ergonômica",
            desc: "AAAAAA",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
        {
            title: "Bicicleta Ergonômica",
            desc: "AAAAAA",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
        {
            title: "Bicicleta Ergonômica",
            desc: "AAAAAA",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
        {
            title: "Bicicleta Ergonômica",
            desc: "AAAAAA",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
        {
            title: "Bicicleta Ergonômica",
            desc: "AAAAAA",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
        {
            title: "Bicicleta Ergonômica",
            desc: "AAAAAA",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
        {
            title: "Bicicleta Ergonômica",
            desc: "AAAAAA",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
        {
            title: "Bicicleta Ergonômica",
            desc: "AAAAAA",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
        {
            title: "Bicicleta Ergonômica",
            desc: "AAAAAA",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
        {
            title: "Bicicleta Ergonômica",
            desc: "AAAAAA",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
        {
            title: "Bicicleta Ergonômica",
            desc: "AAAAAA",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
        {
            title: "Bicicleta Ergonômica",
            desc: "AAAAAA",
            image: "/assets/images/woman-halter.png",
            video: "",
        },
    ]);

    return (
        <>
            {treinos.map((treino, index) => (
                <Card
                    key={index}
                    title={treino.title}
                    desc={treino.desc}
                    image={treino.image}
                    video={treino.video}
                    isEditCards
                />
            ))}
        </>
    );
};

const Card = (props: CardProps) => {
    const { title, desc, image, video, isEditCards } = props;
    const { openModal, closeModal } = useModal();

    const handleOpenModal = (newContent: contentModal) => {
        if(isEditCards){
            openModal(<ModalTreinamentosView content={newContent} closeModal={closeModal}/>)
        }else{
            openModal(<ModalEditTreinamento content={newContent} closeModal={closeModal}/>)
        }   
    }

    return (
        <S.ContainerCard onClick={() => handleOpenModal({title, desc, video})}>
            {
                isEditCards && 
                <S.IconEditContainer>
                    <img src={iconEdit} alt="Icon de edição" />
                </S.IconEditContainer>
            }
            <S.ImageCard src={image} alt={title} />
            <S.ContentCard>
                <S.TitleCard>{title}</S.TitleCard>
                <S.DescriptionCard>{desc}</S.DescriptionCard>
            </S.ContentCard>
        </S.ContainerCard>
    );
};

export default App;