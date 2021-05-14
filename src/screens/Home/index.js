import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Bike as BikeIcon,
  Hide as HideIcon,
  Kayak as KayakIcon,
  Location as LocationIcon,
  Menu as MenuIcon,
  Spa as SpaIcon,
  Tennis as TennisIcon,
  WaterSk as WaterSkIcon,
} from '../../components/icons';
import * as Colors from '../../utils/colors';
import styles from './style';

const Home = ({navigation}) => {
  const goToDetail = () => {
    navigation.navigate('Detail');
  };

  return (
    <View style={styles.continer}>
      <SafeAreaView>
        <View style={styles.menuWrapper}>
          <MenuIcon fill={Colors.BLACK} style={styles.menuIcon} />
          <Image
            style={styles.personImage}
            source={require('../../../assets/images/person.png')}
          />
        </View>
      </SafeAreaView>
      <ScrollView>
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
              onPress={goToDetail}
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
            <TouchableOpacity
              onPress={goToDetail}
              style={styles.discoverItemWrapper}>
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
            <TouchableOpacity style={styles.activitesItemWrapper}>
              <KayakIcon
                width={30}
                height={30}
                style={styles.activitesItemIcon}
              />
              <Text style={styles.activitesItemTitle}>KAYAK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.activitesItemWrapper}>
              <HideIcon
                width={30}
                height={30}
                style={styles.activitesItemIcon}
              />
              <Text style={styles.activitesItemTitle}>HIKE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.activitesItemWrapper}>
              <WaterSkIcon
                width={30}
                height={30}
                style={styles.activitesItemIcon}
              />
              <Text style={styles.activitesItemTitle}>WATER SKI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.activitesItemWrapper}>
              <SpaIcon
                width={30}
                height={30}
                style={styles.activitesItemIcon}
              />
              <Text style={styles.activitesItemTitle}>SPA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.activitesItemWrapper}>
              <TennisIcon
                width={30}
                height={30}
                style={styles.activitesItemIcon}
              />
              <Text style={styles.activitesItemTitle}>TENNIS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.activitesItemWrapper}>
              <BikeIcon
                width={40}
                height={30}
                style={styles.activitesItemIcon}
              />
              <Text style={styles.activitesItemTitle}>CYCLE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <TouchableOpacity
              style={[styles.learnMoreItemsWrapper, {marginLeft: 20}]}>
              <ImageBackground
                style={styles.learnMoreItemImage}
                imageStyle={styles.learnMoreItemImageStyle}
                source={require('../../../assets/images/boatbeach.png')}>
                <Text style={styles.learnMoreItemText}>
                  Snorkelling in Mexico
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.learnMoreItemsWrapper, {marginLeft: 20}]}>
              <ImageBackground
                style={styles.learnMoreItemImage}
                imageStyle={styles.learnMoreItemImageStyle}
                source={require('../../../assets/images/beach.png')}>
                <Text style={styles.learnMoreItemText}>Beach in USA</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
