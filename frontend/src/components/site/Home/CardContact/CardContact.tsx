import React from "react";
import * as S from "./CardContactStyles";

interface CardContactProps {
  icon: string,
  contact: string,
  description: string,
  altIcon: string,
  link?: string,
}

const CardContact:React.FC<CardContactProps> = ({icon, altIcon, contact, description, link}) => {
  return (
    <S.CardContactStyle>
      <S.TitleContact>
        <img src={icon} alt={altIcon}/>
        <a rel="stylesheet" target="_blank" href={link}>{contact}</a>
      </S.TitleContact>
      <S.DescriptionContact>
        {description}
      </S.DescriptionContact>
    </S.CardContactStyle>
  );
};

export default CardContact;