import * as S from './LoginStyles'
import LoginContainer from "@/containers/admin/Login/LoginContainer";
import WaveRed from "@/components/global/WaveRed/WaveRed";

const Login = () =>{
    return(
        <>
        <S.ContentBackground>
            <LoginContainer/>
        </S.ContentBackground>
        <WaveRed/>
        </>
    )
}

export default Login