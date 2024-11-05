import React from 'react';
import * as S from "./SubtitleContainerStyles";
import SubTitle from '@/components/global/SubTitle/SubTitle';
import WaveWhite from "/assets/svg/WaveWhite.svg";

const SubtitleContainer = () => {
  return (
    <S.SubtitleContainerStyle>
        <S.ImageWaveWhite src={WaveWhite}/>
        <S.TextContainer>
          <div>
            <SubTitle subTitle="Participe das Nossas" mainTitle="Aulas"/>
          </div>
        </S.TextContainer>
    </S.SubtitleContainerStyle>
  );
};

export default SubtitleContainer;