import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import {useTheme} from './hooks/ThemeContext';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';

const AppStack = createStackNavigator();

const Routes = () => {
  const {theme} = useTheme();
  return (
    <>
      <StatusBar barStyle={theme.barstyle} backgroundColor={theme.background} />
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: theme.background, // set background all screen in navigation.
          },
        }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Detail" component={Detail} />
        <AppStack.Screen name="Favorites" component={Favorites} />
      </AppStack.Navigator>
    </>
  );
};

export default Routes;
