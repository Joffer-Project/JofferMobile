import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faTimesCircle, faCircleQuestion, faGear } from '@fortawesome/free-solid-svg-icons';
import personInfo from '../components/personInfo';

const SwipeScreen = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Mario Luigi',
      image: require('../assets/kuva6.png'),
      jobDetails: 'Own life boss\nLocation: Mushroom Kingdom',
    },
    {
      name: 'IT',
      image: require('../assets/kuva5.jpg'),
      jobDetails: '',
    },
    {
      name: 'City Of Oulu',
      image: require('../assets/kuva4.jpg'),
      jobDetails: 'Position: Software Engineer\nLocation: Oulu',
    },
  ]);

  const renderSwiper = () => {
    return (
      <Swiper
        cards={persons}
        renderCard={(person, index) => <personInfo person={person} />}
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
            source={require('../assets/joffer2.png')} 
            style={styles.logo}
          />
        </View>
        {renderSwiper()}
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => { /* Handle press */ }}>
            <FontAwesomeIcon icon={faTimesCircle} size={60} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Handle press */ }}>
            <Image source={require('../assets/Superlike.png')} style={styles.customIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Handle press */ }}>
            <FontAwesomeIcon icon={faHeart} size={60} style={[styles.icon, { color: '#58D336' }]} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconsContainer2}>
          <TouchableOpacity onPress={() => { /* Handle press */ }}>
            <FontAwesomeIcon icon={faCircleQuestion} size={40} style={[styles.icon, { color: 'black' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Handle press */ }}>
            <FontAwesomeIcon icon={faGear} size={40} style={[styles.icon, { color: '#FF7E33' }]} />
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
    backgroundColor: '#0C6BE8',
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
    marginTop: 450,
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
});

export default SwipeScreen;

