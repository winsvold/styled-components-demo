import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #888;
  }
`;

function App() {
    return (
        <div>
            <GlobalStyle />
        </div>
    );
}

export default App;
