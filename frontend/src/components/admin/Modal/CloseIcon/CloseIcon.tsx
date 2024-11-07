import React from 'react';
import * as S from "./CloseIconStyles"

interface closeIconProps {
    closeModal: () => void;
}

const CloseIcon: React.FC<closeIconProps> = ({closeModal}) => {
  return <S.CloseIcon onClick={() => closeModal()}/>
};

export default CloseIcon;