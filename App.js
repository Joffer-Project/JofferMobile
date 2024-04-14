import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './navigation';

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;