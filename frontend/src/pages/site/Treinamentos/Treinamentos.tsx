import * as S from './TreinamentosStyles';
import Navbar from '../../../components/global/Navbar/Navbar';
import ContainerTop from '../../../containers/Treinamentos/ContainerTop/ContainerTop';
import ContainerCards from '../../../containers/Treinamentos/ContainerCards/ContainerCards';
import { ModalProvider } from '../../../contexts/ModalProvider';
import MouseFollower from '../../../components/global/MouseFollower/MouseFollower';
import WaveBlack from '../../../../public/assets/svg/WaveBlack.svg';


const Treinamentos = () => {
    return (
        <S.SectionBackground>
            <MouseFollower/>
            <ModalProvider>
                <S.TreinamentoBackground>
                    <Navbar></Navbar>
                    <S.TreinamentoWhiteBackground>
                        <ContainerTop></ContainerTop>
                        <ContainerCards></ContainerCards>    
                        <S.WaveBlackContainer>
                            <S.ImageWaveBlack src={WaveBlack}/>
                        </S.WaveBlackContainer>
                    </S.TreinamentoWhiteBackground>
                </S.TreinamentoBackground>
            </ModalProvider>
        </S.SectionBackground>
    )
};

export default Treinamentos;
