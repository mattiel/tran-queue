import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`        
    html {
      font-size: 16px;
      background-color: var(--color-black);
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
      padding: .25rem;
      color: var(--color-gray-200);
    }
    
    tr {
      background-color: var(--color-gray-1000);
      height: 2.75rem;
      border-bottom: 1px solid var(--color-gray-900);
      
      &:hover {
        background-color: var(--color-gray-900);
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

      --color-gray-10: #FDFDFD;
      --color-gray-30: #F8F8F8;
      --color-gray-50: #FDFDFD;
      --color-gray-100: #F3F4F4;
      --color-gray-200: #E7E8E9;
      --color-gray-300: #B7BBBD;
      --color-gray-400: #9FA5A7;
      --color-gray-500: #878E91;
      --color-gray-600: #6F777C;
      --color-gray-700: #576166;
      --color-gray-800: #3F4A50;
      --color-gray-900: #27343a;
      --color-gray-1000: #0f1d24;

      --color-blue-50: #F9FBFF;
      
      --z-index-1: 1;
      --z-index-2: 2;
      --z-index-3: 3;
      --z-index-4: 4;
      --z-index-5: 5;
      --z-index-6: 6;
    }
`;

export default Global;