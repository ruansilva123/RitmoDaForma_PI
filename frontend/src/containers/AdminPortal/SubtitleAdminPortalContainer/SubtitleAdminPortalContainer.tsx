import React from 'react';
import * as S from "./SubtitleAdminPortalContainerStyles";
import WaveWhite from "../../../../public/assets/svg/WaveWhite.svg";

const SubtitleAdminPortalContainer = () => {
  return (
    <S.SubtitleAdminPortalContainerStyle>
        <S.ImageWaveWhite src={WaveWhite}/>
        <S.TextAdminPortalContainer>
            <S.SubtitleAdminPortal>O que você precisa Modificar?</S.SubtitleAdminPortal>
        </S.TextAdminPortalContainer>
    </S.SubtitleAdminPortalContainerStyle>
  );
};

export default SubtitleAdminPortalContainer;