import styled from 'styled-components';
import { colors } from '@/styles/Theme';

export const HomePageStyle = styled.div`
  background-image: ${colors.gradientDarkGray};
`;

export const Main = styled.main`
  display: flex;
  height: 100%;
`;

export const ContentHome = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`

export const TextText = styled.p`
  position: fixed;
  top: 50%;
  color: #fff;
`