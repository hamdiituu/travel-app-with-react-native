import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Liked, Profile} from '../screens';
import styles from './styles';
import * as Colors from '../utils/colors';
import {
  Home as HomeIcon,
  Like as LikedIcon,
  User as UserIcon,
} from '../components/icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: styles.tabBar,
      activeTintColor: Colors.ORANGE,
      showLabel: false,
    }}
    initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={Home}
      options={{tabBarIcon: ({color}) => <HomeIcon fill={color} />}}
    />
    <Tab.Screen
      name="Liked"
      component={Liked}
      options={{tabBarIcon: ({color}) => <LikedIcon fill={color} />}}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{tabBarIcon: ({color}) => <UserIcon fill={color} />}}
    />
  </Tab.Navigator>
);

export default TabNavigator;
