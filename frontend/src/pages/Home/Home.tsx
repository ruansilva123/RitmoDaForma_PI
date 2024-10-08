import React from 'react';
import * as S from './HomeStyles';
import Navbar from '../../components/global/Navbar/Navbar';
import ApresentationContainer from '../../containers/Home/ApresentationContainer/ApresentationContainer';
import SidebarHome from '../../containers/Home/SidebarHome/SidebarHome';
import MouseFollower from '../../components/global/MouseFollower/MouseFollower';
import PaymentPlansContainer from '../../containers/Home/PaymentPlansContainer/PaymentPlansContainer';
import { useRef } from 'react';
import ContactsContainer from '../../containers/Home/ContactsContainer/ContactsContainer';

const Home = () => {
  const sectionRefAboutUs = useRef<HTMLDivElement>(null);
  const sectionRefPlans = useRef<HTMLDivElement>(null);
  const sectionRefContacts = useRef<HTMLDivElement>(null);

  return (  
    <S.HomePageStyle>
      <Navbar/>
      <S.Main>
        <S.ContentHome>
          <SidebarHome 
            sectionRefAboutUs={sectionRefAboutUs} 
            sectionRefPlans={sectionRefPlans}
            sectionRefContacts={sectionRefContacts}
            />
          <ApresentationContainer ref={sectionRefAboutUs}/>
          <PaymentPlansContainer ref={sectionRefPlans}/>
          <ContactsContainer ref={sectionRefContacts}/>
        </S.ContentHome>
      </S.Main>
      <MouseFollower/>
    </S.HomePageStyle>
  )
};

export default Home;
