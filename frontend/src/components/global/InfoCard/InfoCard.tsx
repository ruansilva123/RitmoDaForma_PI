import React from "react";
import * as S from "./InfoCardStyles";
import IconInfo from "../../../../public/assets/svg/Halter.svg";

interface InfoCardProps {
    message: string,
}

const InfoCard: React.FC<InfoCardProps> = ({message}) =>{
    return(
        <S.BackgroundContainer>
            <S.ContainerInfo>
                {message}
                <S.IconInfo src={IconInfo} />
            </S.ContainerInfo>
        </S.BackgroundContainer>
    )
}

export default InfoCard