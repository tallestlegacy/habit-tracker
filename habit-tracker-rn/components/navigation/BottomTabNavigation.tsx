import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';

import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';

const Tab = AnimatedTabBarNavigator();

import AnalyticsScreen from '../screens/AnalysticsScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import colors from '../lib/colors';
import {radius} from '../lib/styles';

interface tabInterface {
  name: string;
  component: React.FC;
  icon: string;
}

const tabs: tabInterface[] = [
  {
    name: 'Analystics',
    component: AnalyticsScreen,
    icon: 'graph',
  },
  {
    name: 'Checklist',
    component: HomeScreen,
    icon: 'checklist',
  },
  {
    name: 'Settings',
    component: SettingsScreen,
    icon: 'gear',
  },
];

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      appearance={{
        tabBarBackground: colors.primary,
        dotCornerRadius: radius.standard,
      }}
      tabBarOptions={{
        activeTintColor: colors.black,
        inactiveTintColor: colors.white,
        activeBackgroundColor: colors.white,
      }}
      initialRouteName="Checklist"
      /* screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveBackgroundColor: colors.primary,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarInactiveTintColor: '#ffffff77',
        tabBarActiveTintColor: '#ffffff',
      }} */
    >
      {tabs.map(({name, component, icon}) => {
        return (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              tabBarIcon: ({color}) => (
                <Icon name={icon} size={18} color={color} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
