import React from "react";
import * as S from "./TitleModalStyles";

interface TitleModalProps {
  text: string,  
}

const TitleModal: React.FC<TitleModalProps> = ({text}) => {
  return (
    <S.Title>{text}</S.Title>
  );
};

export default TitleModal;