import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
  }
  p, h3 {
    margin: 0;
  }
  @font-face {
  font-family: 'Alex Brush';
  font-style: normal;
  font-weight: 400;
  src: url('https://fonts.gstatic.com/s/alexbrush/v12/SZc83FzrJKuqFbwMKk6EhUvz7RlNiCY0GA.woff2') format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Alex Brush';
  font-style: normal;
  font-weight: 400;
  src: url('https://fonts.gstatic.com/s/alexbrush/v12/SZc83FzrJKuqFbwMKk6EhUXz7RlNiCY.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`;

export default GlobalStyles;
