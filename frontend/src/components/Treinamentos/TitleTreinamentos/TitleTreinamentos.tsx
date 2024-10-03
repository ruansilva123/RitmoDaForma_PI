import React from "react";
import * as S from "./TitleTreinamentosStyles";

interface TitleTreinamentosProps {
    subtTitle: string,
    mainTitle: string,
}

const TitleTreinamentos: React.FC<TitleTreinamentosProps> = ({subtTitle, mainTitle}) => {
    return (
        <>
            <S.SubTitle>{subtTitle}</S.SubTitle>
            <S.MainTitle>{mainTitle}</S.MainTitle>
        </>

    );
}

export default TitleTreinamentos;