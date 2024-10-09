import React from 'react';
import * as S from "./SubtitleContainerStyles";
import SubTitle from '../../../components/global/SubTitle/SubTitle';
import ImageWaveWhite from '../../../components/global/ImageWaveWhite/ImageWaveWhite';

const SubtitleContainer = () => {
  return (
    <S.SubtitleContainerStyle>
        <ImageWaveWhite bottom="52vh"/>
        <S.BackgroundSubTitleContainer>
          <div>
            <SubTitle subTitle="Participe das Nossas" mainTitle="Aulas Semanais"/>
          </div>
        </S.BackgroundSubTitleContainer>
    </S.SubtitleContainerStyle>
  );
};

export default SubtitleContainer;