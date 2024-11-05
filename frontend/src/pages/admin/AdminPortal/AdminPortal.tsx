import * as S from "./AdminPortalStyles";
import SubtitleAdminPortalContainer from '@/containers/AdminPortal/SubtitleAdminPortalContainer/SubtitleAdminPortalContainer';
import NavbarAdmin from '@/components/global/NavbarAdmin/NavbarAdmin';
import WaveRed from "/assets/svg/WaveRed.svg";
import MenuAdminPortalContainer from "@/containers/AdminPortal/MenuAdminPortalContainer/MenuAdminPortalContainer";

const AdminPortal = () => {
  return (
    <S.AdminPortalBackground>
      <NavbarAdmin/>
      <S.ContentAdminPortal>
        <SubtitleAdminPortalContainer/>
        <MenuAdminPortalContainer/>
        <S.WaveRedContainer>
          <S.ImageWaveRed src={WaveRed}/>
        </S.WaveRedContainer>
      </S.ContentAdminPortal>
    </S.AdminPortalBackground>
  );
};

export default AdminPortal;