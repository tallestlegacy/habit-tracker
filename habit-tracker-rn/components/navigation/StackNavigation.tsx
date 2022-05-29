import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';
import AddHabitScreen from '../screens/AddHabitScreen';

const Stack = createNativeStackNavigator();

const StackNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
      />
      <Stack.Screen name="AddHabit" component={AddHabitScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
