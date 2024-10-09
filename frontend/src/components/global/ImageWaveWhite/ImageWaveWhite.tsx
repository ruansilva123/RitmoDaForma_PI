import React from 'react';
import * as S from "./ImageWaveWhiteStyles";
import WaveWhite from "../../../../public/assets/svg/WaveWhite.svg"

interface ImageWaveWhiteProps {
    invertWave?: boolean;
    bottom: string;
}

const ImageWaveWhite: React.FC<ImageWaveWhiteProps> = ({invertWave, bottom}) => {
  return (
    <S.ImageWaveWhite src={WaveWhite} bottom={bottom} invertWave={invertWave ? invertWave : false}>
    </S.ImageWaveWhite>
  );
};

export default ImageWaveWhite;