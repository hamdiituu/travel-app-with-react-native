import {StyleSheet} from 'react-native';
import * as Colors from '../utils/colors';
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,

    elevation: 8,
  },
});

export default styles;
