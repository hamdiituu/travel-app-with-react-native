import {StyleSheet} from 'react-native';
import * as Colors from '../../utils/colors';
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  menuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  menuIcon: {},
  personImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  activeDiscoverCategoriesTitle: {
    marginRight: 30,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: Colors.ORANGE,
  },
  inactiveDiscoverCategoriesTitle: {
    marginRight: 30,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: Colors.GRAY,
  },
  discoverItemsWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverItemWrapper: {
    marginRight: 20,
  },
  discoverItemImage: {
    width: 170,
    height: 250,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'flex-end',
  },
  discoverItemImageStyle: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: Colors.WHITE,
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
  },
  discoverItemLocationIcon: {
    marginTop: 6.5,
  },
  discoverItemLocationText: {
    marginTop: 8,
    marginLeft: 9,
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: Colors.WHITE,
  },
  activitesWrapper: {
    marginTop: 30,
    marginLeft: 20,
  },
  activitesTitle: {
    fontSize: 28,
    fontFamily: 'Lato-Black',
  },
  activitesItemsWrapper: {
    flexDirection: 'row',
    marginTop: 24,
  },
  activitesItemWrapper: {
    marginRight: 24,
    alignItems: 'center',
  },
  activitesItemIcon: {},
  activitesItemTitle: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Lato-Bold',
    color: Colors.GRAY,
  },
});

export default styles;
