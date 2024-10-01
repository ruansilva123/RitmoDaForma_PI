import * as S from "./NavbarStyles";
import logo from "../../../public/assets/icons/logo.png";
import { useLocation } from "react-router-dom";
import React from "react";
import { LocationInterface } from "../../constants/interfaces/global/HomeInterfaces";

const Navbar:React.FC = () => {
  const location: LocationInterface = useLocation();
  const currentRoute: string = location.pathname;

  return (
    <S.NavbarContainer>
        <S.LogoContainer>
            <img src={logo} alt="Logo da acadêmia Ritmo da Forma" width={"70px"} />
        </S.LogoContainer>
        <S.Nav>
            <ul>
              {
                currentRoute == "/" ?
                  <S.NavSelected>Sobre nós</S.NavSelected>
                : 
                  <li>Sobre nós</li>
              }
                
                <li>Aulas</li>
                <li>Treinamentos</li>
            </ul>
        </S.Nav>
    </S.NavbarContainer>
  );
};

export default Navbar;