import * as S from "./AulasStyle"
import Navbar from '@/components/global/Navbar/Navbar';
import SubtitleContainer from '@/containers/site/Aulas/SubtitleContainer/SubtitleContainer';
import TableAulasContainer from '@/containers/site/Aulas/TableAulasContainer/TableAulasContainer';
import MouseFollower from '@/components/global/MouseFollower/MouseFollower';
import WaveBlack from "/assets/svg/WaveBlack.svg"
import { MotivationalPhrase } from "./AulasStyle";

const Aulas = () => {
  return (
    <S.AulasBackground>
        <Navbar></Navbar>
        <MotivationalPhrase>"Cada treino é um passo mais perto do seu objetivo."</MotivationalPhrase>
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