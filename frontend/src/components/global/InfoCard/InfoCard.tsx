import React from "react";
import * as S from "./InfoCardStyles";
import IconInfo from "../../../../public/assets/svg/Halter.svg";
import IconInfoHover from "../../../../public/assets/svg/HalterHover.svg";


interface InfoCardProps {
    message: string,
    black?: boolean,
}

const InfoCard: React.FC<InfoCardProps> = ({message, black}) =>{
    return(
        <S.BackgroundContainer>
            <S.ContainerInfo>
                {message}
                <S.IconInfo src={black ? IconInfoHover : IconInfo} />
            </S.ContainerInfo>
        </S.BackgroundContainer>
    )
}

export default InfoCard