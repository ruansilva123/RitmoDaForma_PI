import * as S from './TreinamentosStyles';
import Navbar from '../../../components/global/Navbar/Navbar';
import ContainerTop from '../../../containers/site/Treinamentos/ContainerTop/ContainerTop';
import ContainerCards from '../../../containers/site/Treinamentos/ContainerCards/ContainerCards';
import MouseFollower from '../../../components/global/MouseFollower/MouseFollower';
import WaveBlack from '/assets/svg/WaveBlack.svg';


const Treinamentos = () => {
    return (
        <S.SectionBackground>
            <MouseFollower/>
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
        </S.SectionBackground>
    )
};

export default Treinamentos;
