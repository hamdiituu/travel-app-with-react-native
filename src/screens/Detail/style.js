import {Dimensions, StyleSheet} from 'react-native';
import * as Colors from '../../utils/colors';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {},
  backgroundImageStyle: {
    height: height * 0.8,
  },
  headerBarWrapper: {
    marginLeft: 24,
    justifyContent: 'flex-start',
  },
  headerBarIcon: {},
  discoverWrapper: {
    marginTop: height * 0.4,
    marginLeft: 20,
    marginRight: 27,
  },
  discoverTitle: {
    fontFamily: 'Lato-Bold',
    color: Colors.WHITE,
    fontSize: 32,
  },
  locationWrapper: {
    marginTop: 7,
    flexDirection: 'row',
  },
  locationIcon: {},
  locationTitleText: {
    fontFamily: 'Lato-Bold',
    color: Colors.WHITE,
    fontSize: 16,
    marginLeft: 5,
  },
  descriptionIconWrapper: {
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16.0,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 24,
    borderRadius: 360,
    width: 48,
    height: 48,
    marginBottom: -50,
    left: width * 0.8,
    zIndex: 999,
  },
  descriptionWrapper: {
    backgroundColor: Colors.WHITE,
    height: height * 0.4,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 23,
    padding: 20,
  },

  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: Colors.BLACK,
  },
  descriptionText: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: Colors.DARKGRAY,
    marginTop: 20,
    fontWeight: '500',
  },
  descriptionInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  descriptionInfoItem: {},
  descriptionInfoTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: Colors.DARKGRAY,
  },
  descriptionInfoSubWrapper: {
    flexDirection: 'row',
    marginTop: 5,
  },
  descriptionInfoSubTextBig: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: Colors.ORANGE,
  },
  descriptionInfoSubTextSmall: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: Colors.DARKGRAY,
    marginTop: 10,
    marginLeft: 2,
  },
  bookButton: {
    height: 53,
    borderRadius: 10,
    marginTop: 34,
    backgroundColor: Colors.ORANGE,
    marginBottom: 87,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookBottonText: {
    fontSize: 18,
    color: Colors.WHITE,
    fontFamily: 'Lato-Bold',
  },
});

export default styles;
