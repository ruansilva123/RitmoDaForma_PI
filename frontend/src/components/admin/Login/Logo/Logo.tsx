import * as S from "./LogoStyles";
import logoRed from "/assets/icons/logo.png"

const Logo = () => {

    return (
        <S.NavbarContainer>
            <S.LogoContainer>
                <img src={logoRed} alt="Logo da acadêmia Ritmo da Forma" width={"70px"}/> 
                <p>Ritmo da Forma</p>
            </S.LogoContainer>
        </S.NavbarContainer>
    );
};

export default Logo;