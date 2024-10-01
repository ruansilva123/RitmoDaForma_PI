import * as S from "./ApresentationContainerStyles";
import AthleticWoman from "../../../../public/assets/images/athletic-woman.png";
import AthleticMan from "../../../../public/assets/images/athletic-man.png";
import WaveWhite from "../../../../public/assets/svg/WaveWhite.svg";
import ImagePersonTraining from "../../../components/Home/ImagePersonTraining/ImagePersonTraining";
import TitleRitmoDaForma from "../../../components/Home/TitleRitmoDaForma/TitleRitmoDaForma";
import React, { forwardRef } from "react";

const ApresentationContainer = forwardRef<HTMLDivElement>(
    (props, ref) => {
        return (
            <S.ApresentationContainerStyle ref={ref} >
                <S.DescriptionContainer>
                    <TitleRitmoDaForma/>
                    <S.Description>
                        <p>
                        Bem-vindo à academia Ritmo da Forma, onde transformamos metas em conquistas! 
                        Com uma equipe de profissionais dedicados e um ambiente acolhedor,
                        oferecemos treinos que atendem a todos os níveis, 
                        desde iniciantes até atletas avançados.
                        </p>
                    </S.Description>
                </S.DescriptionContainer>
                <S.ImagesExample>
                    <div>
                        <S.ImageWomanTrainingContainer>
                            <ImagePersonTraining image={AthleticWoman} description="Mulher treinando na acadêmia" />
                        </S.ImageWomanTrainingContainer>
                        <S.ImageManTrainingContainer>
                            <ImagePersonTraining image={AthleticMan} description="Homem treinando na acadêmia"/>
                        </S.ImageManTrainingContainer>
                    </div>
                </S.ImagesExample>
                <S.ImageWaveWhite src={WaveWhite} alt="" />
                
            </S.ApresentationContainerStyle>
        );
    }
)

export default ApresentationContainer;