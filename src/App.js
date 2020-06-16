import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ThemeProvider from './hooks/ThemeContext';

import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
