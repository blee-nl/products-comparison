import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body{ 
    margin:0; 
    font-family: Roboto,system-ui, sans-serif;
    font-style: normal;
    font-size: 12px;
    font-weight: normal;
    line-height: 1.5;
    color:#25282B;
  }
`;

const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
  ],
  colors: {
    orange: "#f6a80",
    cream: "#faf7f3",
    daryGray: "#635f5c",
  },
};

const colors = {
  orange: "#f6a80",
  cream: "#cecbcb",
  daryGray: "#635f5c",
  blue: "#007eff",
};

const screen = {
  xlarge: "1440px",
  large: "1220px",
  default: "1024px",
  medium: "768px",
  semiSmall: "640px",
  small: "480px",
  xsmall: "320px",
};

export { GlobalStyle, theme, colors, screen };
