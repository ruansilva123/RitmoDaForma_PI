import * as S from "./MenuAdminPortalContainerStyles";
import InfoCard from "../../../components/global/InfoCard/InfoCard";
import CardMenuAdminItem from "../../../components/AdminPortal/CardMenuAdminItem/CardMenuAdminItem";
import paymentPlanIcon from "../../../../public/assets/icons/payment_plan.png"
import videoIcon from "../../../../public/assets/icons/video.png"
import shareIcon from "../../../../public/assets/icons/share.png"
import calendar from "../../../../public/assets/icons/calendar.png"
import { Link } from "react-router-dom";

const MenuAdminPortalContainer = () => {
  return (
    <S.MenuAdminPortalContainerStyle>
        <S.MenuAdminItens>
            <Link to="/editar_planos"><CardMenuAdminItem title="Planos de pagamento" icon={paymentPlanIcon}/></Link>
            <Link to="/editar_aulas"><CardMenuAdminItem title="Tabela de aulas" icon={calendar}/></Link>
            <Link to="/editar_tutoriais"><CardMenuAdminItem title="Vídeos de tutoriais" icon={videoIcon}/></Link>
            <Link to="/editar_contatos"><CardMenuAdminItem title="Contatos" icon={shareIcon}/></Link>
            
        </S.MenuAdminItens>
        <InfoCard message="Selecione o campo que você deseja alterar no site!"/>
    </S.MenuAdminPortalContainerStyle>
  );
};

export default MenuAdminPortalContainer;