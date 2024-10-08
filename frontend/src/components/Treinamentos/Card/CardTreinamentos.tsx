import React, { useState } from "react";
import * as S from "./CardTreinamentosStyles";
import InfoCard from "../../global/InfoCard/InfoCard";
import LittleBalls from "../../global/LittleBalls/LittleBalls";
import Modal from "../Modal/Modal";

interface CardProps {
    titulo: string;
    descricao: string;
    imagem: string;
}

const App = () => {
    const [treinos] = useState([
        {
            titulo: "Halteres",
            descricao: "Fortalecimento dos músculos e flexibilidade",
            imagem: "/assets/images/woman-halter.png",
        },
        {
            titulo: "Barra Olímpica",
            descricao: "Rebeca Andrade",
            imagem: "/assets/images/woman-halter.png",
        },
        {
            titulo: "Bicicleta Ergonômica",
            descricao: "AAAAAA",
            imagem: "/assets/images/woman-halter.png",
        },
        {
            titulo: "Bicicleta Ergonômica",
            descricao: "AAAAAA",
            imagem: "/assets/images/woman-halter.png",
        },
        {
            titulo: "Bicicleta Ergonômica",
            descricao: "AAAAAA",
            imagem: "/assets/images/woman-halter.png",
        },
        {
            titulo: "Bicicleta Ergonômica",
            descricao: "AAAAAA",
            imagem: "/assets/images/woman-halter.png",
        },

    ]);

    return (
        <>
            {treinos.map((treino, index) => (
                <Card
                    key={index}
                    titulo={treino.titulo}
                    descricao={treino.descricao}
                    imagem={treino.imagem}
                />
            ))}
        </>
    );
};

const Card = (props: CardProps) => {
    const { titulo, descricao, imagem } = props;
    return (
        <>
            <S.ContainerCard>
                <S.ImageCard src={imagem} alt={titulo} />
                <S.ContentCard>
                    <S.TitleCard>{titulo}</S.TitleCard>
                    <S.DescriptionCard>{descricao}</S.DescriptionCard>
                </S.ContentCard>
            </S.ContainerCard>
        </>

    );
};

export default App;