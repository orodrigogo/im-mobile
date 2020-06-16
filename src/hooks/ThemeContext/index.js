import React, {createContext, useContext, useState} from 'react';

import colors from './colorsTheme';

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
  const [theme, setTheme] = useState(colors.dark);

  const changeTheme = () => {
    if (theme.type === 'dark') {
      setTheme(colors.light);
    } else {
      setTheme(colors.dark);
    }
  };

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  const {theme, changeTheme} = context;
  return {theme, changeTheme};
}
