import * as S from "./EditTreinamentosStyles";
import NavbarAdmin from '../../../components/global/NavbarAdmin/NavbarAdmin';
import WaveRed from "../../../components/global/WaveRed/WaveRed";
import ContainerCards from "../../../containers/Treinamentos/ContainerCards/ContainerCards";
import SubtitleAdminContainer from "../../../containers/global/SubtitleAdminContainer/SubtitleAdminContainer";
import SearchAndAddContainer from "../../../containers/EditTreinamentos/SearchAndAddContainer/SearchAndAddContainer";


const EditTreinamentos = () => {
  return (
    <S.EditTreinamentosBackground>
      <NavbarAdmin/>
      <S.ContentEditTreinamentos>
        <SubtitleAdminContainer/>
        <SearchAndAddContainer/>
        <ContainerCards EditCards/>
        <WaveRed/>
      </S.ContentEditTreinamentos>
    </S.EditTreinamentosBackground>
  );
};

export default EditTreinamentos;