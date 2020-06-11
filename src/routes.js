import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#221F1F', // set background all screen in navigation.
          },
        }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Detail" component={Detail} />
        <AppStack.Screen name="Favorites" component={Favorites} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
