// Components
import NavbarAdmin from '@/components/global/NavbarAdmin/NavbarAdmin';
import WaveRed from "@/components/global/WaveRed/WaveRed";
import ContainerCards from "@/containers/site/Treinamentos/ContainerCards/ContainerCards";
import SubtitleAdminContainer from "@/containers/global/SubtitleAdminContainer/SubtitleAdminContainer";
import SearchAndAddContainer from "@/containers/admin/EditTreinamentos/SearchAndAddContainer/SearchAndAddContainer";

// Style
import * as S from "./EditTreinamentosStyles";

const EditTreinamentos = () => {
  return (
    <S.EditTreinamentosBackground>
      <NavbarAdmin/>
      <S.ContentEditTreinamentos>
        <SubtitleAdminContainer text="Editar Vídeos de Treinamento" />
        <SearchAndAddContainer/>
        <ContainerCards isEditCards/>
        <WaveRed/>
      </S.ContentEditTreinamentos>
    </S.EditTreinamentosBackground>
  );
};

export default EditTreinamentos;