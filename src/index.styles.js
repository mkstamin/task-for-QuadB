import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
   /*  */
   body{
     margin: 0;
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
     sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     background-color: ${({ theme, changeThem }) => (!changeThem ? '#fff' : theme.bgColor)};
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }
    .page-100 {
      min-height: calc(100vh - 10rem);
      padding: 5rem 0;
    }
    
    /* section */
    .section {
      padding: 5rem 0;
    }
    .section-center {
      width: 90vw;
      margin: 0 auto;
      max-width: var(--max-width);
    }

    @media screen and (min-width: 992px) {
      .section-center {
        width: 95vw;
      }
    }
    .text-center {
      text-align: center;
    }
`;

export default Global;
