import React from 'react';
import * as S from "./AulasStyle"
import Navbar from '../../components/global/Navbar/Navbar';
import SubtitleContainer from '../../containers/Aulas/SubtitleContainer/SubtitleContainer';
import TableAulasContainer from '../../containers/Aulas/TableAulasContainer/TableAulasContainer';
import MouseFollower from '../../components/global/MouseFollower/MouseFollower';

const Aulas = () => {
  return (
    <S.AulasBackground>
        <Navbar></Navbar>
        <S.MotivationalPhrase>"Cada treino é um passo mais perto do seu objetivo."</S.MotivationalPhrase>
        <S.ContentAulasContainer>
            <SubtitleContainer></SubtitleContainer>
            <TableAulasContainer/>
        </S.ContentAulasContainer>
        <MouseFollower/>
    </S.AulasBackground>
  );
};

export default Aulas;