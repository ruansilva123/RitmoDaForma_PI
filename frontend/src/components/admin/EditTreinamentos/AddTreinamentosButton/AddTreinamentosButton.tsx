import React from "react";
import * as S from "./AddTreinamentosButtonStyles"

interface AddTreinamentosButtonProps {
  value: string, 
  onClick: () => void
}

const AddTreinamentosButton: React.FC<AddTreinamentosButtonProps> = ({ value, onClick }) => {
  return <S.AddTreinamentosButtonStyle value={value} type="button" onClick={() => onClick()}/>
};

export default AddTreinamentosButton;