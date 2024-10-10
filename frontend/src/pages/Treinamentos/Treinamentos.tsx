import * as S from './TreinamentosStyles';
import Navbar from '../../components/global/Navbar/Navbar';
import ContainerTop from '../../containers/Treinamentos/ContainerTop/ContainerTop';
import ContainerCards from '../../containers/Treinamentos/ContainerCards/ContainerCards';
import { ModalProvider } from '../../contexts/modalProvider';

const Treinamentos = () => {
    return (
        <ModalProvider>
            <S.TreinamentoBackground>
                <Navbar></Navbar>
                <ContainerTop></ContainerTop>
                <ContainerCards></ContainerCards>
            </S.TreinamentoBackground>
        </ModalProvider>
    )
};

export default Treinamentos;
