import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import {Detail} from '../screens';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName={'Home'}>
    <Stack.Screen
      name="TabNavigator"
      component={TabNavigator}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Detail"
      component={Detail}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default StackNavigator;
