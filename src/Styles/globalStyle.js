import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
}
body {
    background-color: #D9385675;
    display: flex;
    justify-content:center;
    align-items: center;
    height: 100%;
    min-height: 100vh;
}
`