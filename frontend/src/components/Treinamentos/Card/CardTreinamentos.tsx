import React from "react";
import * as S from "./CardTreinamentosStyles";

export const Card = () => {
    return (
        <>
            <S.ContainerCard>
                <S.ImageCard />
                <S.ContentCard>
                    <S.TitleCard>Teste</S.TitleCard>
                    <S.DescriptionCard>Lorem ipsum dolor sit amet, consect. </S.DescriptionCard>
                </S.ContentCard>
            </S.ContainerCard>
        </>


    );
};

export default Card;