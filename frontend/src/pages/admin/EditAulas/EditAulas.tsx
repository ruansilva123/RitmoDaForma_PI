import * as S from "./EditAulasStyles";
import NavbarAdmin from "@/components/global/NavbarAdmin/NavbarAdmin";
import SubtitleAdminContainer from "@/containers/global/SubtitleAdminContainer/SubtitleAdminContainer";
import WaveRed from "@/components/global/WaveRed/WaveRed";
import TableAulasContainer from "@/containers/site/Aulas/TableAulasContainer/TableAulasContainer";

const EditAulas = () => {
  return (
    <S.EditAulasStyle>
        <NavbarAdmin/>
        <S.ContentEditTreinamentos>
            <SubtitleAdminContainer text="Editar Aulas Adicionais"/>
            <TableAulasContainer isEdit />
            <WaveRed/>
        </S.ContentEditTreinamentos>
    </S.EditAulasStyle>
  );
};

export default EditAulas;