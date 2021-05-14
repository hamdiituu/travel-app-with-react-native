import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style';
import {
  LeftArrow as LeftArrowIcon,
  Location as LocationIcon,
  Like as LikeIcon,
} from '../../components/icons';
import * as Colors from '../../utils/colors';

const Detail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
        source={require('../../../assets/images/canyon.png')}>
        <SafeAreaView style={styles.headerBarWrapper}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <LeftArrowIcon width={24} height={24} fill={Colors.WHITE} />
          </TouchableOpacity>
        </SafeAreaView>
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Hiking the Grand Canyon</Text>
          <View style={styles.locationWrapper}>
            <LocationIcon style={styles.locationIcon} />
            <Text style={styles.locationTitleText}>USA</Text>
          </View>
        </View>
        <View style={styles.descriptionIconWrapper}>
          <LikeIcon fill={Colors.ORANGE} width={24} height={24} />
        </View>
        <ScrollView style={styles.descriptionWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            Great day hikes and backpacking routes on the North and South Rim of
            this century-old national park include easy hikes overlooking the
            rim and more rugged trekking options that descend into the canyon.
          </Text>
          <View style={styles.descriptionInfoWrapper}>
            <View style={styles.descriptionInfoItem}>
              <Text style={styles.descriptionInfoTitle}>PRICE</Text>
              <View style={styles.descriptionInfoSubWrapper}>
                <Text style={styles.descriptionInfoSubTextBig}>$350</Text>
                <Text style={styles.descriptionInfoSubTextSmall}>/ person</Text>
              </View>
            </View>
            <View style={styles.descriptionInfoItem}>
              <Text style={styles.descriptionInfoTitle}>RATING</Text>
              <View style={styles.descriptionInfoSubWrapper}>
                <Text style={styles.descriptionInfoSubTextBig}>4.5</Text>
                <Text style={styles.descriptionInfoSubTextSmall}>/ 5</Text>
              </View>
            </View>
            <View style={styles.descriptionInfoItem}>
              <Text style={styles.descriptionInfoTitle}>DURATION</Text>
              <View style={styles.descriptionInfoSubWrapper}>
                <Text style={styles.descriptionInfoSubTextBig}>3</Text>
                <Text style={styles.descriptionInfoSubTextSmall}> hours</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookBottonText}>Book Now</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Detail;
