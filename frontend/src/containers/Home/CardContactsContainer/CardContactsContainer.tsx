import React from "react";
import * as S from "./CardContactsContainerStyles";
import CardContact from "../../../components/Home/CardContact/CardContact";
import instagram from "/assets/icons/instagram.png";
import phone from "/assets/icons/phone.png";
import whats from "/assets/icons/whats.png";

const CardContactsContainer = () => {
  return (
    <S.CardContactsContainerStyle>
      <CardContact altIcon="Instagram ícone" icon={instagram} contact="(11) 91111-1111" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur voluptatum atque"/>
      <CardContact altIcon="Telefone ícone" icon={phone} contact="(11) 91111-1111" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur voluptatum atque"/>
      <CardContact altIcon="Whatsapp ícone" icon={whats} contact="(11) 91111-1111" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur voluptatum atque"/>
    </S.CardContactsContainerStyle>
  );
};

export default CardContactsContainer;