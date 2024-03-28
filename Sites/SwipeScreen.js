import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faTimesCircle, faCircleQuestion, faGear } from '@fortawesome/free-solid-svg-icons';
import CompanyInfo from '../Components/companyInfo.js';

const SwipeScreen = () => {
  const [companies, setCompanies] = useState([
    {
      name: 'Nokia',
      image: require('./img/Joffer-Logobig.png'), //nokia
      jobDetails: 'Position: Software Engineer\nLocation: Oulu',
    },
    {
      name: 'IT',
      image: require('./img/Joffer-Logobig.png'), //IT
      jobDetails: 'Position: Software Engineer\nLocation: Oulu',
    },
    {
      name: 'City Of Oulu',
      image: require('./img/Joffer-Logobig.png'), //City of oulu
      jobDetails: 'Position: Software Engineer\nLocation: Oulu',
    },
  ]);

  const renderSwiper = () => {
    return (
      <Swiper
        cards={companies}
        renderCard={(company, index) => <CompanyInfo company={company} />}
        backgroundColor={'transparent'} 
        stackSize={2}
        verticalSwipe={false}
        containerStyle={styles.swiperContainer} 
      />
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./img/Joffer-Logobig.png')} 
            style={styles.logo}
          />
        </View>
        {renderSwiper()}
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => { /* Handle press */ }}>
            <FontAwesomeIcon icon={faTimesCircle} size={60} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Handle press */ }}>
            <Image source={require('./img/Joffer-Logobig.png')} style={styles.customIcon} /> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Handle press */ }}>
            <FontAwesomeIcon icon={faHeart} size={60} style={[styles.icon, { color: '#58D336' }]} />
          </TouchableOpacity>
        </View>

        <View style={styles.BottomButtonsContainer}>
        <TouchableOpacity /* onPress={} */ >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/add.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity /* onPress={} */ >
          <View style={styles.BottomButton}>
            <Image style={styles.userImage} source={require('./img/userAvatar.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity /* onPress={} */ >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/SwipeLogo.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity /* onPress={} */ >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/setting.png')} />
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#FF7E33',
    padding: 20,
    marginBottom: 10,
    marginLeft: -20,
    marginRight: -20,
    height: 150,
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 30,
  },
  swiperContainer: {
    height: 400, 
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 430,
  },
  iconsContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
    
  },
  icon: {
    fontSize: 80,
    color: '#D9352D',
    
  },
  customIcon: {
    width: 60,  
    height: 60, 
    resizeMode: 'contain', 
  },
  BottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    position: 'absolute',
    width: 'screenWidth',
    height: 90,
  },
  BottomButton: {
    width: 92,
    height: 90,
    borderTopWidth: 3,
    borderRadius: 10,
    borderLeftWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FF7E33',
    backgroundColor: "#fff"
  },
  addImage: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  userImage: {
    resizeMode: 'contain',
    width: 60,
    height: 50,
  },
});

export default SwipeScreen;