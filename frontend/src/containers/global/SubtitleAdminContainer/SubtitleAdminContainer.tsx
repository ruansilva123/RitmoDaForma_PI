import * as S from "./SubtitleAdminContainerStyles";

import WaveWhite from '../../../components/global/WaveWhite/WaveWhite';

const SubtitleAdminContainer = () => {
  return (
    <S.SubtitleAdminContainerStyle>
        <WaveWhite/>
        <S.TextAdminContainer>
            <S.SubtitleAdmin>Editar Vídeos de Treinamento</S.SubtitleAdmin>
        </S.TextAdminContainer>
    </S.SubtitleAdminContainerStyle>
  );
};

export default SubtitleAdminContainer;