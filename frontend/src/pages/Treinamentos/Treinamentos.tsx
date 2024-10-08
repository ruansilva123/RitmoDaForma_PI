import React, { useState } from 'react';
import * as S from './TreinamentosStyles';
import Navbar from '../../components/global/Navbar/Navbar';
import ContainerTop from '../../containers/Treinamentos/ContainerTop/ContainerTop';
import ContainerCards from '../../containers/Treinamentos/ContainerCards/ContainerCards';
import Modal from '../../components/Treinamentos/Modal/Modal';


const Treinamentos = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);    

    const openModal = () => {
        setModalIsOpen(!modalIsOpen)
    }


    return (
        <S.TreinamentoBackground>
            {
                modalIsOpen &&   
                <Modal openModal={openModal}/>
            }
            <Navbar></Navbar>
            <ContainerTop></ContainerTop>
            <ContainerCards></ContainerCards>
        </S.TreinamentoBackground>
    )
};

export default Treinamentos;
