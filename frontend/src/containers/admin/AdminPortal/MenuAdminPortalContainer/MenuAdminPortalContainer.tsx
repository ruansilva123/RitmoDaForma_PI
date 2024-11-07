import * as S from "./MenuAdminPortalContainerStyles";
import InfoCard from "@/components/global/InfoCard/InfoCard";
import CardMenuAdminItem from "@/components/admin/AdminPortal/CardMenuAdminItem/CardMenuAdminItem";
import paymentPlanIcon from "/assets/icons/payment-plan.png"
import videoIcon from "/assets/icons/video.png"
import shareIcon from "/assets/icons/share.png"
import calendar from "/assets/icons/calendar.png"
import { Link } from "react-router-dom";

const MenuAdminPortalContainer = () => {
  return (
    <S.MenuAdminPortalContainerStyle>
        <S.MenuAdminItens>
            <Link to="/admin/editar_planos"><CardMenuAdminItem title="Planos de pagamento" icon={paymentPlanIcon}/></Link>
            <Link to="/admin/editar_aulas"><CardMenuAdminItem title="Tabela de aulas" icon={calendar}/></Link>
            <Link to="/admin/editar_tutoriais"><CardMenuAdminItem title="Vídeos de tutoriais" icon={videoIcon}/></Link>
            <Link to="/admin/editar_contatos"><CardMenuAdminItem title="Contatos" icon={shareIcon}/></Link>
        </S.MenuAdminItens>
        <InfoCard black message="Selecione o campo que você deseja alterar no site!"/>
    </S.MenuAdminPortalContainerStyle>
  );
};

export default MenuAdminPortalContainer;