import React from 'react';
import { ThemeProvider } from './ThemeContext';
import App from './App';

const Main = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default Main;
