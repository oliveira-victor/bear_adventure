import { createGlobalStyle, styled } from "styled-components";


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Quicksand', sans-serif;
    }
`

export default GlobalStyle

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`