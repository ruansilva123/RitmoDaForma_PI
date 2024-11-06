import * as S from "./WaveRedStyles";
import WaveRedImage from "/assets/svg/WaveRed.svg";

const WaveRed = () => {
  return (
    <S.WaveRedContainer>
        <S.ImageWaveRed src={WaveRedImage}/>
    </S.WaveRedContainer>
  );
};

export default WaveRed;