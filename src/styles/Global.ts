import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f6f6f6;

        --cardBackground: #ebe9ea;
        
        --white: #fff;

        --title: #181818;
        --text: #474747;
    }

    p {
        font-weight: 500;
    }

    h1, h2 {
        font-weight: 600;
    }   

    * {
        box-sizing: boder-box;
        padding: 0;
        margin: 0;
    }

    body {
        background: var(--background);
        font-family: 'Montserrat', sans-serif;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 98.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }


`;
