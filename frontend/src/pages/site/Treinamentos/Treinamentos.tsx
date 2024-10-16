import * as S from './TreinamentosStyles';
import Navbar from '../../../components/global/Navbar/Navbar';
import ContainerTop from '../../../containers/Treinamentos/ContainerTop/ContainerTop';
import ContainerCards from '../../../containers/Treinamentos/ContainerCards/ContainerCards';
import { ModalProvider } from '../../../contexts/ModalProvider';
import MouseFollower from '../../../components/global/MouseFollower/MouseFollower';

const Treinamentos = () => {
    return (
        <S.SectionBackground>
            <MouseFollower/>
            <ModalProvider>
                <S.TreinamentoBackground>
                    <Navbar></Navbar>
                    <ContainerTop></ContainerTop>
                    <ContainerCards></ContainerCards>
                </S.TreinamentoBackground>
            </ModalProvider>
        </S.SectionBackground>
    )
};

export default Treinamentos;
