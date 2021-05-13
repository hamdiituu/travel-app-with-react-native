import React from 'react';
import {View, Text} from 'react-native';
import AppNavigator from './navigators/AppNavigator';
import styles from './style';

const Entrypoint = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};

export default Entrypoint;
