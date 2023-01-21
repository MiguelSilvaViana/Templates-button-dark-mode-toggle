import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    transition: background-color 0.3s ease-in-out;
    background-color: ${(props) => (props.isDarkMode ? '#292c35' : '#fff')};
  }
`;

const SwitchButton = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 40px;
  background-color: #111;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #333;
  }
`;

const SwitchButtonInner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  margin: 10px;
  position: absolute;
  left: ${(props) => (props.isDarkMode ? '40px' : '0')};
  transition: left 0.3s ease-in-out;
`;

const Button3 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <SwitchButton onClick={handleClick}>
        <FaMoon size={30} color={isDarkMode ? '#fff' : '#292c35'} />
        <SwitchButtonInner isDarkMode={isDarkMode} />
        <FaSun size={30} color={isDarkMode ? '#292c35' : '#FDB813'} />
      </SwitchButton>
    </>
  );
};

export default Button3;
