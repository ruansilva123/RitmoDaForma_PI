import React from "react";
import * as S from "./CardContactStyles";

interface CardContactProps {
  icon: string,
  contact: string,
  description: string,
  altIcon: string,
}

const CardContact:React.FC<CardContactProps> = ({icon, altIcon, contact, description}) => {
  return (
    <S.CardContactStyle>
      <S.TitleContact>
        <img src={icon} alt={altIcon} />
        <a rel="stylesheet" href="">{contact}</a>
      </S.TitleContact>
      <S.DescriptionContact>
        {description}
      </S.DescriptionContact>
    </S.CardContactStyle>
  );
};

export default CardContact;