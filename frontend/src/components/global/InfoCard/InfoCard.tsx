import React, { useState } from "react";
import * as S from './InfoCardStyles';

const InfoCard = () =>{
    return(
        <S.BackgroundContainer>
        <S.ContainerInfo> Todos os equipamentos acima estão disponíveis na academia Ritmo da Forma!<S.IconInfo></S.IconInfo></S.ContainerInfo>
        </S.BackgroundContainer>
    )
}

export default InfoCard