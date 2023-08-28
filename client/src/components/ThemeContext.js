
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState('pink'); // Default color

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <ThemeContext.Provider value={{ color, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
