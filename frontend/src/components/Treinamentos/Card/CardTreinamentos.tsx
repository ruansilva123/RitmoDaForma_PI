import React, { useState } from "react";
import * as S from "./CardTreinamentosStyles";
import { useModal } from "../../../contexts/ModalProvider";
import { contentModal } from "../../../types/types";

interface CardProps {
    title: string;
    desc: string;
    image: string;
    video: string;
}

const App = () => {
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
                />
            ))}
        </>
    );
};

const Card = (props: CardProps) => {
    const { title, desc, image, video } = props;
    const { openModal } = useModal();

    const handleCloseModal = (newContent: contentModal) => {
        openModal(newContent);
    }

    return (
        <S.ContainerCard onClick={() => handleCloseModal({title, desc, video})}>
            <S.ImageCard src={image} alt={title} />
            <S.ContentCard>
                <S.TitleCard>{title}</S.TitleCard>
                <S.DescriptionCard>{desc}</S.DescriptionCard>
            </S.ContentCard>
        </S.ContainerCard>
    );
};

export default App;