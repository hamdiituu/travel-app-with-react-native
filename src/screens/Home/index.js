import React from 'react';
import {
  Image,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  Menu as MenuIcon,
  Location as LocationIcon,
  Kayak as KayakIcon,
  Hide as HideIcon,
  WaterSk as WaterSkIcon,
  Spa as SpaIcon,
  Tennis as TennisIcon,
  Bike as BikeIcon,
} from '../../components/icons';
import * as Colors from '../../utils/colors';
import styles from './style';
const Home = () => {
  return (
    <View style={styles.continer}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <MenuIcon fill={Colors.BLACK} style={styles.menuIcon} />
            <Image
              style={styles.personImage}
              source={require('../../../assets/images/person.png')}
            />
          </View>
        </SafeAreaView>
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text style={styles.activeDiscoverCategoriesTitle}>All</Text>
            <Text style={styles.inactiveDiscoverCategoriesTitle}>
              Destinations
            </Text>
            <Text style={styles.inactiveDiscoverCategoriesTitle}>Cities</Text>
            <Text style={styles.inactiveDiscoverCategoriesTitle}>
              Experiences
            </Text>
          </View>
          <View style={styles.discoverItemsWrapper}>
            <TouchableOpacity
              style={[styles.discoverItemWrapper, {marginLeft: 20}]}>
              <ImageBackground
                style={styles.discoverItemImage}
                imageStyle={styles.discoverItemImageStyle}
                source={require('../../../assets/images/kayak.png')}>
                <Text style={styles.discoverItemTitle}>
                  Kayaking in the Tofino Sea
                </Text>
                <View style={styles.discoverItemLocationWrapper}>
                  <LocationIcon style={styles.discoverItemLocationIcon} />
                  <Text style={styles.discoverItemLocationText}>Canada</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.discoverItemWrapper}>
              <ImageBackground
                style={styles.discoverItemImage}
                imageStyle={styles.discoverItemImageStyle}
                source={require('../../../assets/images/canyon-1.png')}>
                <Text style={styles.discoverItemTitle}>
                  Hiking the Grand Canyon
                </Text>
                <View style={styles.discoverItemLocationWrapper}>
                  <LocationIcon style={styles.discoverItemLocationIcon} />
                  <Text style={styles.discoverItemLocationText}>USA</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.activitesWrapper}>
          <Text style={styles.activitesTitle}>Actives</Text>
          <View style={styles.activitesItemsWrapper}>
            <View style={styles.activitesItemWrapper}>
              <KayakIcon
                width={30}
                height={30}
                style={styles.activitesItemIcon}
              />
              <Text style={styles.activitesItemTitle}>KAYAK</Text>
            </View>
            <View style={styles.activitesItemWrapper}>
              <HideIcon
                width={30}
                height={30}
                style={styles.activitesItemIcon}
              />
              <Text style={styles.activitesItemTitle}>HIKE</Text>
            </View>
            <View style={styles.activitesItemWrapper}>
              <WaterSkIcon
                width={30}
                height={30}
                style={styles.activitesItemIcon}
              />
              <Text style={styles.activitesItemTitle}>WATER SKI</Text>
            </View>
            <View style={styles.activitesItemWrapper}>
              <SpaIcon
                width={30}
                height={30}
                style={styles.activitesItemIcon}
              />
              <Text style={styles.activitesItemTitle}>SPA</Text>
            </View>
            <View style={styles.activitesItemWrapper}>
              <TennisIcon
                width={30}
                height={30}
                style={styles.activitesItemIcon}
              />
              <Text style={styles.activitesItemTitle}>TENNIS</Text>
            </View>
            <View style={styles.activitesItemWrapper}>
              <BikeIcon
                width={40}
                height={30}
                style={styles.activitesItemIcon}
              />
              <Text style={styles.activitesItemTitle}>CYCLE</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
