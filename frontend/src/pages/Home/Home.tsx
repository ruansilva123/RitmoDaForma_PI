import React, { useState } from 'react';
import * as S from './HomeStyles';
import Navbar from '../../components/global/Navbar';
import ApresentationContainer from '../../containers/Home/ApresentationContainer/ApresentationContainer';
import SidebarHome from '../../containers/Home/SidebarHome/SidebarHome';
import MouseFollower from '../../components/Home/MouseFollower/MouseFollower';
import PaymentPlansContainer from '../../containers/Home/PaymentPlansContainer/PaymentPlansContainer';
import { useRef } from 'react';
import ContactsContainer from '../../containers/Home/ContactsContainer/ContactsContainer';

const Home = () => {
  const sectionRefAboutUs = useRef<HTMLDivElement>(null);
  const sectionRefPlans = useRef<HTMLDivElement>(null);
  const sectionRefContacts = useRef<HTMLDivElement>(null);

  return (  
    <S.HomePageStyle>
      <MouseFollower/>
      <Navbar/>
      <S.Main>
        <SidebarHome 
          sectionRefAboutUs={sectionRefAboutUs} 
          sectionRefPlans={sectionRefPlans}
          sectionRefContacts={sectionRefContacts}
        />
        <S.ContentHome>
          <ApresentationContainer ref={sectionRefAboutUs}/>
          <PaymentPlansContainer ref={sectionRefPlans}/>
          <ContactsContainer ref={sectionRefContacts}/>
        </S.ContentHome>
      </S.Main>
    </S.HomePageStyle>
  )
};

export default Home;
