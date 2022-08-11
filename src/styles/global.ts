import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,
    input,
    textarea,
    button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    body {
        background: ${(props) => props.theme.background};
        -webkit-font-smoothing: antialiased;
    }

    :focus {
        outline: 0;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 768px) {
        html {
            font-size: 87.5%;
        }
    }
`;
