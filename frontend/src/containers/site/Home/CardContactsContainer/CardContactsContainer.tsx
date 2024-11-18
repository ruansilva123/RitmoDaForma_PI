import * as S from "./CardContactsContainerStyles";
import CardContact from "../../../../components/site/Home/CardContact/CardContact";
import instagram from "/assets/icons/instagram.png";
import phone from "/assets/icons/phone.png";
import whats from "/assets/icons/whats.png";

const CardContactsContainer = () => {
  return (
    <S.CardContactsContainerStyle>
      <CardContact altIcon="Instagram ícone" icon={instagram} contact="(11) 91111-1111" description="Nos siga no instagram para saber receber nossas novidades!"/>
      <CardContact altIcon="Telefone ícone" icon={phone} contact="(11) 91111-1111" description="Faça uma ligação a qualquer momento!"/>
      <CardContact altIcon="Whatsapp ícone" icon={whats} contact="(11) 91111-1111" description="Possui alguma dúvida? Envie uma mensagem para o nosso whatsapp."/>
    </S.CardContactsContainerStyle>
  );
};

export default CardContactsContainer;