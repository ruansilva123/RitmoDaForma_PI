import * as S from "./LoginContainerStyles"
import Input from "@/components/admin/Login/Input/Input";
import Button from "@/components/admin/Login/Button/Button";
const LoginContainer = () =>{
    return(
        <S.BackgroundLogin>
           <h1>Sign In</h1>
           <p>Bem vindo ao portal de administração.</p>
           <Input/>
           <S.Line/>
           <Button/>

        </S.BackgroundLogin>
    )
}

export default LoginContainer