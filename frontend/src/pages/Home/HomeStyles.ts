import styled from 'styled-components';
import { colors } from '../../styles/Theme';

export const HomePageStyle = styled.div`
  background-image: ${colors.gradientDarkGray};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Main = styled.main`
  display: flex;
`;

export const ContentHome = styled.div`
  width: 100%;
`

export const TextText = styled.p`
  position: fixed;
  top: 50%;
  color: #fff;
  mix-blend-mode: difference;
`
