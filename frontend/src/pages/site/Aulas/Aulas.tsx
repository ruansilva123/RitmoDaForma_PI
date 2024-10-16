import * as S from "./AulasStyle"
import Navbar from '../../../components/global/Navbar/Navbar';
import SubtitleContainer from '../../../containers/Aulas/SubtitleContainer/SubtitleContainer';
import TableAulasContainer from '../../../containers/Aulas/TableAulasContainer/TableAulasContainer';
import MouseFollower from '../../../components/global/MouseFollower/MouseFollower';
import WaveBlack from "../../../../public/assets/svg/WaveBlack.svg"

const Aulas = () => {
  return (
    <S.AulasBackground>
        <Navbar></Navbar>
        <S.MotivationalPhrase>"Cada treino é um passo mais perto do seu objetivo."</S.MotivationalPhrase>
        <S.ContentAulasContainer>
            <SubtitleContainer/>
            <TableAulasContainer/>
            <S.WaveBlackContainer>
                <S.ImageWaveBlack src={WaveBlack}/>
            </S.WaveBlackContainer>
        </S.ContentAulasContainer>
        <MouseFollower/>
    </S.AulasBackground>
  );
};

export default Aulas;