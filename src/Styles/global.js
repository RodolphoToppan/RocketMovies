import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
    height: 1rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK_300};
    border-radius: 0.8rem;
  }

`
