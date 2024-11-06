import * as S from './LoginStyles'
import LoginContainer from "@/containers/admin/Login/LoginContainer";
import Logo from '@/components/admin/Login/Logo/Logo';

const Login = () =>{
    return(
        <S.BackgroundColor>
        <Logo/>
        <S.ContentBackground>
            <LoginContainer/>
        </S.ContentBackground>
        </S.BackgroundColor>
    )
}

export default Login