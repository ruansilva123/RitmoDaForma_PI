import * as S from './ContainerTopStyles';
import SubTitle from '@/components/global/SubTitle/SubTitle';
import WaveWhite2 from "/assets/svg/WaveWhite.svg";
import InputSearch from '@/components/site/Treinamentos/Search/Search';

import { useSelector, useDispatch } from 'react-redux';
import { searchEquipament } from '@/redux/actions/treinamentosActions';
import { rootStateType } from '@/types/types';

const ContainerTop = () => {
    const dispatch = useDispatch();
    const { searchTerm } = useSelector((state: rootStateType) => state.treinamentos);

    return (
        <S.ContainerTop>
            <S.ImageWaveWhite src={WaveWhite2} alt="" />
            <S.BackgroundContainerTop>
                <S.ContainerSubtitle>
                    <SubTitle subTitle="Aprenda com nossos" mainTitle="treinamentos"/>
                </S.ContainerSubtitle>
                <S.ContainerSearch>
                    <InputSearch 
                        value={searchTerm}
                        onChange={
                        (
                            e: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch(searchEquipament(e.target.value))
                        }} />
                </S.ContainerSearch>
            </S.BackgroundContainerTop>
        </S.ContainerTop>

    )
};

export default ContainerTop;
