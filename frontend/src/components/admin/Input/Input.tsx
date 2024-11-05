import React from "react";
import * as S from "./InputStyles"

const Input = () =>{
    return(
        <>
        <S.InputComponent type = "text" placeholder= "Nome de usuário"></S.InputComponent>
        <S.InputComponent type = "password" placeholder= "Senha"></S.InputComponent>
        </>
    )
}

export default Input