import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
:root {
// Colors
    --bgColor: #EBEBEB;
    --mainColor: #F5A25D;
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
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
