import React from 'react';
import * as S from './ContainerTopStyles';
import TitleTreinamentos from '../../../components/Treinamentos/TitleTreinamentos/TitleTreinamentos';
import WaveWhite2 from "../../../../public/assets/svg/WaveWhite.svg";
import { InputSearch } from '../../../components/Treinamentos/Search/SearchStyles';


const ContainerTop = () => {
    return (

        <S.ContainerTop>
            <S.ImageWaveWhite src={WaveWhite2} alt="" />
            <S.BackgroundContainerTop>

                <TitleTreinamentos />

                <S.ContainerSearch>
                    <InputSearch />
                </S.ContainerSearch>
            </S.BackgroundContainerTop>
        </S.ContainerTop>

    )
};

export default ContainerTop;
