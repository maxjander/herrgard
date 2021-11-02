import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import bg from "./gfx/bg/helaHuvud.jpg";

const GlobalStyle = createGlobalStyle`
:root {
// Colors
 --oldbgColor: #F5A25D;
    --oldmainColor: #EBEBEB;
    --bgColor: #fff;
    --mainColor: #000;
    --accColor: #FA7F72;
    --lastColor: #389393;
// Margins & Paddings

  --xsDist: 12px;
  --sDist: 16px;
  --mDist: 22px;
  --lDist:28px;
  --xlDist: 32px;
}
 * {
margin: 0;
padding: 0;
 }
 body {
 font-family: 'Chivo', sans-serif;
 line-height: 1.8;
 /* background-color: var(--oldmainColor); */
 font-weight: 500;
 font-size: 18px;
   color: #474747;
 /* background-image: url(${bg}); */

}
 h1, h2, h3, h4, h5, h6 {
 font-family: 'Playfair Display', serif;
 font-weight: 900;
 font-style: italic;

 color: var(--lastColor);

}
html {

}

`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
