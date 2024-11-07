import React from "react";
import * as S from "./ButtonModalStyles";

interface ButtonModalProps {
    value: string,
    onClick: () => void,
}

const ButtonModal: React.FC<ButtonModalProps> = ({value, onClick}) =>{
    return <S.ButtonModalStyle 
        type="button" 
        value={value}
        onClick={() => onClick()}
    />   
}

export default ButtonModal;