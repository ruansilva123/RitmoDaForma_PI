import React from 'react';
import * as S from './ContainerTopStyles';
import WaveWhite2 from "../../../../public/assets/svg/WaveWhite.svg";

const ContainerTop = () => {
    return (

        <S.ContainerTop>
            <S.ImageWaveWhite src={WaveWhite2} alt="" />
            <S.BackgroundContainerTop>
            </S.BackgroundContainerTop>
        </S.ContainerTop>

    )
};

export default ContainerTop;
