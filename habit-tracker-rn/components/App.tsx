import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import colors from './lib/colors';

import SystemNavigationBar from 'react-native-system-navigation-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StackNavigation from './navigation/StackNavigation';

const App = () => {
  useEffect(() => {
    console.log('Working fine so far');
    SystemNavigationBar.setNavigationColor(colors.primary);
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={colors.primary} animated />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
