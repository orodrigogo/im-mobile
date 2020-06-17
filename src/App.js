import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import ThemeProvider from './hooks/ThemeContext';
import DataPersistContext from './hooks/DataPersistContext';

import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <DataPersistContext>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </DataPersistContext>
    </NavigationContainer>
  );
};

export default App;
