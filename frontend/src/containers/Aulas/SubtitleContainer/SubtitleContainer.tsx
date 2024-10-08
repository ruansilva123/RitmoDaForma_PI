import React from 'react';
import * as S from "./SubtitleContainerStyles";
import WaveWhite2 from "../../../../public/assets/svg/WaveWhite.svg"
import SubTitle from '../../../components/global/SubTitle/SubTitle';

const SubtitleContainer = () => {
  return (
    <S.SubtitleContainerStyle>
        <S.ImageWaveWhite src={WaveWhite2} ></S.ImageWaveWhite>
        <S.BackgroundSubTitleContainer>
          <div>
            <SubTitle subTitle="Participe das Nossas" mainTitle="Aulas Semanais"/>
          </div>
        </S.BackgroundSubTitleContainer>
    </S.SubtitleContainerStyle>
  );
};

export default SubtitleContainer;