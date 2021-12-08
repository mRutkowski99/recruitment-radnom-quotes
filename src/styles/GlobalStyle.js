import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 67.5%;
    }

    body {
        min-width: 100vh;
        font-size: 1.6rem;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        background-color: #a996d6;
        color: #fff;
        padding: 2rem;
        display: flex;
        justify-content: center;
    }

    #root {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }

    button {
        font: inherit;
    }

`;

export default GlobalStyle;
