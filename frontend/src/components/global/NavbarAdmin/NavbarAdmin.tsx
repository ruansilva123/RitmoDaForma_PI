import * as S from "./NavnarAdminStyles";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { LocationInterface } from "@/types/types";
import logoWhite from "/assets/icons/logoWhite.png"

const NavbarAdmin = () => {
    const location: LocationInterface = useLocation();
    const currentRoute: string = location.pathname;

    return (
        <S.NavbarContainer>
            <S.LogoContainer>
                <img src={logoWhite} alt="Logo da acadêmia Ritmo da Forma" width={"70px"}/>
            </S.LogoContainer>
            <S.Nav>
                <ul>
                {
                    currentRoute == "/admin" ?
                    <S.NavSelected>
                        <Link to="/admin">Home</Link>
                    </S.NavSelected>
                    : 
                    <li>
                        <Link to="/admin">Home</Link>
                    </li>
                }
                {
                currentRoute == "/editar_planos" ?
                    <S.NavSelected>
                    <Link to="/admin/editar_planos">Planos</Link>
                    </S.NavSelected>
                : 
                    <li>
                    <Link to="/admin/editar_planos">Planos</Link>
                    </li>
                } 
                {
                    currentRoute == "/admin/editar_aulas" ?
                    <S.NavSelected>
                        <Link to="/admin/editar_aulas">Aulas</Link>
                    </S.NavSelected>
                    : 
                    <li>
                        <Link to="/admin/editar_aulas" >Aulas</Link>
                    </li>
                }
                {
                    currentRoute == "/admin/editar_tutoriais" ?
                    <S.NavSelected>
                        <Link to="/admin/editar_tutoriais">Tutoriais</Link>
                    </S.NavSelected>
                    : 
                    <li>
                        <Link to="/admin/editar_tutoriais" >Tutoriais</Link>
                    </li>
                }
                {
                    currentRoute == "/admin/editar_contatos" ?
                    <S.NavSelected>
                        <Link to="/admin/editar_contatos">Contatos</Link>
                    </S.NavSelected>
                    : 
                    <li>
                        <Link to="/admin/editar_contatos">Contatos</Link>
                    </li>
                }
                {
                    currentRoute == "/admin/login" ?
                    <S.NavSelected>
                        <Link to="/admin/login">Sair</Link>
                    </S.NavSelected>
                    : 
                    <li>
                        <Link to="/admin/login">Sair</Link>
                    </li>
                }
                    
                </ul>
            </S.Nav>
        </S.NavbarContainer>
    );
};

export default NavbarAdmin;