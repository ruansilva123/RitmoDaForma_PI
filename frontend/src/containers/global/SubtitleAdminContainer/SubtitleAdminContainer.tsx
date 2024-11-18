import * as S from "./SubtitleAdminContainerStyles";

import WaveWhite from '@/components/global/WaveWhite/WaveWhite';

interface SubtitleAdminContainerProps {
  text: string,
}

const SubtitleAdminContainer: React.FC<SubtitleAdminContainerProps> = ({text}) => {
  return (
    <S.SubtitleAdminContainerStyle>
        <WaveWhite/>
        <S.TextAdminContainer>
            <S.SubtitleAdmin>{text}</S.SubtitleAdmin>
        </S.TextAdminContainer>
    </S.SubtitleAdminContainerStyle>
  );
};

export default SubtitleAdminContainer;