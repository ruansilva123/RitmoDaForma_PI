import { createGlobalStyle } from 'styled-components';
import { colors } from './Theme';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Tahoma';
    src: url('/assets/fonts/tahoma/Tahoma_Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Tahoma Bold';
    src: url('/assets/fonts/tahoma/Tahomabd.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Quicksilver';
    src: url('/assets/fonts/quicksilver/Quicksilver.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'RacingSansOne';
    src: url('/assets/fonts/racingSansOne/RacingSansOne-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    /* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: none;
}

*::-webkit-scrollbar-thumb {
  background-color: ${colors.opacityDarkGray_60};
  border-radius: 20px;

  &:hover{
    background-color: ${colors.darkGray}
  }
}
  }
  body {
    font-family: 'Tahoma', 'Arial', 'Sans-serif';
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
  }
`;
