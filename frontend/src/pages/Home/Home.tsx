import React from 'react';
import * as S from './HomeStyles';
import Navbar from '../../components/global/Navbar';
import ApresentationContainer from '../../containers/Home/ApresentationContainer/ApresentationContainer';
import SidebarHome from '../../containers/Home/SidebarHome/SidebarHome';

const Home = () => {
  return (  
    <S.HomePageStyle>
      <Navbar/>
      <S.Main>
        <SidebarHome></SidebarHome>
        <ApresentationContainer/>
        <div className="payment plans"></div>
        <div className="contacts"></div>
      </S.Main>
    </S.HomePageStyle>
  )
};

export default Home;
