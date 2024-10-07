import React from 'react';
import * as S from './TreinamentosStyles';
import Navbar from '../../components/global/Navbar/Navbar';
import ContainerTop from '../../containers/Treinamentos/ContainerTop/ContainerTop';
import ContainerCards from '../../containers/Treinamentos/ContainerCards/ContainerCards';


const Treinamentos = () => {
    return (
        <S.TreinamentoBackground>
            <Navbar></Navbar>
            <ContainerTop></ContainerTop>
            <ContainerCards></ContainerCards>
        </S.TreinamentoBackground>

    )
};

export default Treinamentos;
