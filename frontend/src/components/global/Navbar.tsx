import * as S from "./NavbarStyles";
import logo from "../../../public/assets/icons/logo.png";

const Navbar = () => {
  return (
    <S.NavbarContainer>
        <S.LogoContainer>
            <img src={logo} alt="Logo da acadêmia Ritmo da Forma" width={"90px"} />
        </S.LogoContainer>
        <S.Nav>
            <ul>
                <li>Sobre nós</li>
                <li>Aulas</li>
                <li>Treinamentos</li>
            </ul>
        </S.Nav>
    </S.NavbarContainer>
  );
};

export default Navbar;