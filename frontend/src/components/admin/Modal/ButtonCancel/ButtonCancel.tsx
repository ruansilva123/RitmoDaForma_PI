import React from "react";
import * as S from "./ButtonCancelStyles";

interface ButtonCancelProps {
    onClick: () => void,
}

const ButtonCancel: React.FC<ButtonCancelProps> = ({onClick}) =>{
    return <S.ButtonModalStyle 
        type="button" 
        value="Cancelar"
        onClick={() => onClick()}
    />   
}

export default ButtonCancel;