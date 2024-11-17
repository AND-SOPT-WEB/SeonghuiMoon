import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
 html {
  font-size: 62.5%;
  background-color: beige;
}
`;

export default GlobalStyle;
