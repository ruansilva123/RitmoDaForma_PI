import * as S from "./ApresentationContainerStyles";
import AthleticWoman from "../../../../public/assets/images/athletic-woman.png";
import AthleticMan from "../../../../public/assets/images/athletic-man.png";
import WaveWhite from "../../../../public/assets/svg/WaveWhite.svg";
import ImagePersonTraining from "../../../components/Home/ImagePersonTraining/ImagePersonTraining";
import TitleRitmoDaForma from "../../../components/Home/TitleRitmoDaForma/TitleRitmoDaForma";

const ApresentationContainer = () => {
  return (
    <S.ApresentationContainerStyle>
        <S.DescriptionContainer>
            <TitleRitmoDaForma/>
            <S.Description>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin condimentum at augue eu pretium. In egestas eget dui vitae sagittis. 
                    In imperdiet tortor sit amet nibh ultricies volutpat. 
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
};

export default ApresentationContainer;