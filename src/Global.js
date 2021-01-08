import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html {
    font-size: 16px;
    background-color: var(--color-gray-1000);
    color: var(--color-white);
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  table {
    width: 100%;
    max-width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    overflow: hidden
  }

  thead > tr {
    background-color: var(--color-gray-800);
    height: 2.25rem;
    font-size: .875rem;
    text-align: left;
  }

  th {
    padding: .25rem .375rem;
    color: var(--color-gray-200);
  }

  tr {
    background-color: var(--color-gray-900);
    height: 2.75rem;
    border-bottom: 1px solid var(--color-gray-900);

    &:hover {
      //background-color: var(--color-gray-900);
    }
  }

  td {
    padding: .25rem;
    color: var(--color-gray-200);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  :focus {
    outline: 1px solid var(--color-cool-gray-500);
  }

  body, html {
    height: 100%;
  }

  input {
    outline: none;
    box-shadow: none;
    border: 0;
  }

  :root {
    --border-radius-default: .25rem;

    --color-white: #ffffff;
    --color-black: #000;

    --color-primary-50: #F3FBF5;
    --color-primary-100: #DBF5DF;
    --color-primary-200: #ADEDB8;
    --color-primary-300: #34E574;
    --color-primary-400: #34CC68;
    --color-primary-500: #3EB260;
    --color-primary-600: #419A57;
    --color-primary-700: #3F854F;
    --color-primary-800: #3B7146;
    --color-primary-900: #365F3E;
    --color-primary-1000: #315036;

    --color-secondary-50: #F5F9FF;
    --color-secondary-100: #E4EEFE;
    --color-secondary-200: #C7DCFE;
    --color-secondary-300: #A1C8FD;
    --color-secondary-500: #6DB1FD;
    --color-secondary-600: #1D9CF7;
    --color-secondary-700: #1887D6;
    --color-secondary-800: #1373B8;
    --color-secondary-900: #0E629E;
    --color-secondary-1000: #094B7C;

    /* Grayscale Design palette: 
    https://grayscale.design/app?lums=98.00,94.27,75.61,47.31,26.30,16.58,9.90,6.08,2.86,1.04,0.39&palettes=%231A53FF
    ,%230c0d0f&filters=0%7C0,0%7C0&names=,color-gray */
    //--color-gray-30: #fdfdfd;
    //--color-gray-50: #fafafa;
    //--color-gray-100: #f8f8f9;
    //--color-gray-200: #e0e2e6;
    //--color-gray-300: #b2b7c1;
    //--color-gray-400: #858d9d;
    //--color-gray-500: #697283;
    //--color-gray-600: #525967;
    //--color-gray-700: #414651;
    //--color-gray-800: #2b2f36;
    //--color-gray-900: #181a1e;
    //--color-gray-1000: #0c0d0f;

    --color-gray-30: #fdfdfd;
    --color-gray-50: #fafafa;
    --color-gray-100: #f8f8f9;
    --color-gray-200: #e0e2e6;
    --color-gray-300: #b2b7c1;
    --color-gray-400: #677081;
    --color-gray-500: #494f5b;
    --color-gray-600: #3d424c;
    --color-gray-700: #32363e;
    --color-gray-800: #26292f;
    --color-gray-900: #181a1e;
    --color-gray-1000: #0c0d0f;

    --color-blue-50: #fcfdff;
    --color-blue-100: #f6f8ff;
    --color-blue-200: #d7e1ff;
    --color-blue-300: #9cb5ff;
    --color-blue-400: #5c85ff;
    --color-blue-500: #2e62ff;
    --color-blue-600: #003df4;
    --color-blue-700: #0031c3;
    --color-blue-800: #002287;
    --color-blue-900: #00144f;
    --color-blue-1000: #000a29;
    
    --z-index-1: 1;
    --z-index-2: 2;
    --z-index-3: 3;
    --z-index-4: 4;
    --z-index-5: 5;
    --z-index-6: 6;
  }
`;

export default Global;