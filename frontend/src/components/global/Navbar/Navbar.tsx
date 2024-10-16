import * as S from "./NavbarStyles";
import logo from "../../../../public/assets/icons/logo.png";
import { useLocation } from "react-router-dom";
import React from "react";
import { LocationInterface } from "../../../types/types";
import { Link } from "react-router-dom";

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
                  <S.NavSelected>
                    <Link to="/">Sobre nós</Link>
                  </S.NavSelected>
                : 
                  <li>
                    <Link to="/">Sobre nós</Link>
                  </li>
              }
              {
              currentRoute == "/aulas" ?
                <S.NavSelected>
                  <Link to="/aulas">Aulas</Link>
                </S.NavSelected>
              : 
                <li>
                  <Link to="/aulas">Aulas</Link>
                </li>
              } 
              {
                currentRoute == "/treinamentos" ?
                  <S.NavSelected>
                    <Link to="/treinamentos">Treinamentos</Link>
                  </S.NavSelected>
                : 
                  <li>
                    <Link to="/treinamentos" >Treinamentos</Link>
                  </li>
              }
                
            </ul>
        </S.Nav>
    </S.NavbarContainer>
  );
};

export default Navbar;