import React from 'react';
import * as S from "./SubtitleContainerStyles";
import SubTitle from '../../../components/global/SubTitle/SubTitle';
import WaveWhite from "../../../../public/assets/svg/WaveWhite.svg";

const SubtitleContainer = () => {
  return (
    <S.SubtitleContainerStyle>
        <S.ImageWaveWhite src={WaveWhite}/>
        <S.BackgroundSubTitleContainer>
          <div>
            <SubTitle subTitle="Participe das Nossas" mainTitle="Aulas"/>
          </div>
        </S.BackgroundSubTitleContainer>
    </S.SubtitleContainerStyle>
  );
};

export default SubtitleContainer;