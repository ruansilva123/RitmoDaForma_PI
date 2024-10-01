import React from "react";
import * as S from "./SidebarHomeStyles";

interface SidebarHomeProps {
  sectionRefAboutUs: React.RefObject<HTMLDivElement>,
  sectionRefPlans: React.RefObject<HTMLDivElement>,
  sectionRefContacts: React.RefObject<HTMLDivElement>,
}

const SidebarHome: React.FC<SidebarHomeProps> = ({ sectionRefAboutUs, sectionRefPlans, sectionRefContacts }) => {

  const scrollAmout: number = 0;
  const scrollStep: number = -10;
  let currentScroll: number = 100;

  const smoothScroll = () => {
    if(currentScroll > scrollAmout){
      window.scrollBy(0, scrollStep);
      currentScroll += scrollStep;
      requestAnimationFrame(smoothScroll);
    }else{
      currentScroll = 100;
    }
  }

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView(
        { 
          behavior: 'smooth',
          block: 'start'
        }
      );

      if(sectionRef === sectionRefAboutUs){
        setTimeout(() => {
          smoothScroll();
        }, 500)
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
