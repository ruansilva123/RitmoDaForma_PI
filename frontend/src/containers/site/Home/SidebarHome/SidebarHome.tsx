import React from "react";
import * as S from "./SidebarHomeStyles";

interface SidebarHomeProps {
  sectionRefAboutUs: React.RefObject<HTMLDivElement>,
  sectionRefPlans: React.RefObject<HTMLDivElement>,
  sectionRefContacts: React.RefObject<HTMLDivElement>,
}

const SidebarHome: React.FC<SidebarHomeProps> = ({ sectionRefAboutUs, sectionRefPlans, sectionRefContacts }) => {

  const smoothScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      if(sectionRef === sectionRefAboutUs){
        smoothScroll();
      }else{
        sectionRef.current.scrollIntoView(
          { 
            behavior: 'smooth',
            block: 'start'
          }
        );
      }
    }
  };
  
  return (
    <S.SidebarHomeStyle  >
      <S.List>
        <li onClick={() => {scrollToSection(sectionRefAboutUs)}} ></li>
        <li onClick={() => {scrollToSection(sectionRefPlans)}}></li>
        <li onClick={() => {scrollToSection(sectionRefContacts)}}></li>
      </S.List>
    </S.SidebarHomeStyle>
  );
};

export default SidebarHome;
