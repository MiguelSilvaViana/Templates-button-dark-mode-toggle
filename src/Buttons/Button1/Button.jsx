import React, { useState } from 'react';
import ToggleButton from 'react-theme-toggle-button';
import 'react-theme-toggle-button/dist/index.css';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const light = { background: 'lightGray' };
const dark = { background: 'black' };

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    transition: background 0.4s;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.5em;
`;

export default function Button1() {
  const [isDark, setDark] = useState(false);
  const theme = isDark ? dark : light;
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <ToggleButton
          isDark={isDark}
          invertedIconLogic
          onChange={() => setDark((prev) => !prev)}
        />
      </Wrapper>
    </ThemeProvider>
  );
}
