import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Liked, Profile} from '../screens';
import styles from './styles';
import * as Colors from '../utils/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: styles.tabBar,
      activeTintColor: Colors.ORANGE,
      activeBackgroundColor: Colors.GRAY,
      showLabel: false,
    }}
    initialRouteName="Home">
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Liked" component={Liked} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigator;
