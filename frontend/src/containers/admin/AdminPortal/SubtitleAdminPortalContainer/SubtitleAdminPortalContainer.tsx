import * as S from "./SubtitleAdminPortalContainerStyles";

import WaveWhite from '@/components/global/WaveWhite/WaveWhite';

const SubtitleAdminPortalContainer = () => {
  return (
    <S.SubtitleAdminPortalContainerStyle>
        <WaveWhite/>
        <S.TextAdminPortalContainer>
            <S.SubtitleAdminPortal>O que você precisa Modificar?</S.SubtitleAdminPortal>
        </S.TextAdminPortalContainer>
    </S.SubtitleAdminPortalContainerStyle>
  );
};

export default SubtitleAdminPortalContainer;