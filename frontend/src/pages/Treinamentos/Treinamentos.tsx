import React from 'react';
import * as S from './TreinamentosStyles';
import Navbar from '../../components/global/Navbar';
import ContainerTop from '../../containers/Treinamentos/ContainerTop/ContainerTop';


const Treinamentos = () => {
    return (
        <S.TreinamentoBackground>
            <Navbar></Navbar>
            <ContainerTop></ContainerTop>
        </S.TreinamentoBackground>

    )
};

export default Treinamentos;
