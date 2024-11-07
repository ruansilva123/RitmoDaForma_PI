import React from "react";
import * as S from "./InputModalStyles";

interface InputModalProps {
    type?: string,
    placeholder: string,
    name: string,
    value: string,
    onChange: (name: string, value: string) => void,
}

const InputModal: React.FC<InputModalProps> = ({type, placeholder, name, value, onChange}) =>{
    return (
        <>
            {
                type != "description" ?
                    <S.InputModalStyle 
                        type={type ? type : "text"} 
                        placeholder={placeholder}
                        onChange={(e) => onChange(name, e.target.value)}
                        name={name}
                        value={value}
                    />
                :
                    <S.TextAreaStyle
                        placeholder={placeholder}
                        onChange={(e) => onChange(name, e.target.value)}
                        name={name}
                        value={value}
                    />
            
            }
        </>
    )
}

export default InputModal;