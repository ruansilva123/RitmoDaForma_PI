import React from 'react';
import * as S from './ContainerTopStyles';
import TitleTreinamentos from '../../../components/Treinamentos/TitleTreinamentos/TitleTreinamentos';
import WaveWhite2 from "../../../../public/assets/svg/WaveWhite.svg";

const ContainerTop = () => {
    return (

        <S.ContainerTop>
            <S.ImageWaveWhite src={WaveWhite2} alt="" />
            <S.BackgroundContainerTop>
                <TitleTreinamentos subtTitle="Aprenda com nosso" mainTitle="treinamentos">
                </TitleTreinamentos>
            </S.BackgroundContainerTop>
        </S.ContainerTop>

    )
};

export default ContainerTop;
