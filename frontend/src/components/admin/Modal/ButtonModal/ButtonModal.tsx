import React from "react";
import * as S from "./ButtonModalStyles";

interface ButtonModalProps {
    value: string,
    onClick: () => void,
    isCancel?: boolean
}

const ButtonModal: React.FC<ButtonModalProps> = ({value, onClick, isCancel}) =>{
    return <S.ButtonModalStyle data-isCancel={isCancel ? isCancel : false}
        type="button" 
        value={value}
        onClick={() => onClick()}
    />   
}

export default ButtonModal;