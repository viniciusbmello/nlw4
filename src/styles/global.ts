import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Mobile First */
  :root {
    font-size: 62.5%
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    overflow: hidden;
  }

  body {
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility; 
  }

  body > div {
    display: flex;
    flex-direction: column;

    height: 100%;
    margin: 0 auto;
    padding: 2.5rem 2rem;
  }

  body, input, button, textarea {
    font: 400 1.6rem sans-serif;
    color: ${props => props.theme.colors.text};
  }

  @media screen and (min-width: 1000px) {
    body > div  {
      max-width: 992px;
    }
  }
`

export default GlobalStyle
