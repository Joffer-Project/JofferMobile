import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SwipeButton from 'rn-swipe-button';


const ProfilePreview = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    navigation.navigate('Swipe');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/joffer2.png')} style={styles.logo} />
        <Text style={styles.descriptionText}>Let advanced Joffer algorithms find your ideal talent!</Text>
      </View>
      <View style={styles.profileContainer}>
        <Text style={[styles.userName, { color: '#F98A4B', fontSize: 26, marginBottom: 15 }]}>Wet cats</Text>
        <Image source={require('../assets/ass1.jpg')} style={styles.profileImage} />
        <Text style={[styles.professions, { marginTop: 10 }]}>Best job evö</Text>

      </View>
      <View style={styles.aboutContainer}>
        <Text style={[styles.aboutHeaderText, { color: '#0C6BE8', fontSize: 22 }]}>About Us</Text>
        <Text style={[styles.aboutText, { color: 'black', fontSize: 18 }]}>We give ya broke ass some moneyh</Text>
        <Text style={[styles.professions, { marginTop: 20, fontSize: 18, color: '#0C6BE8' }]}>Yaas queen slayyy </Text>
        <Text style={[styles.professions, { marginTop: 10 }]}>"Fking awesome job (little fishy)" </Text>
      </View>
      <View style={styles.linksContainer}>
        <Text style={[styles.linksHeader, { color: '#0C6BE8', fontSize: 18 }]}>Links and Socials</Text>
        <View style={styles.linksList}>
          <Text style={[styles.linkText, { color: '#0C6BE8' }]}>https://desperateforjob?.com</Text>
          <Text style={[styles.linkText, { color: '#0C6BE8' }]}>https://sellass.com</Text>
        </View>
      </View>
      <SwipeButton
        title="    Save and start swiping!"
        onSwipeSuccess={handleNextPress}
        railStyles={{ 
          backgroundColor: 'rgba(255, 191, 129, 0.3)',
          borderColor: '#0C6BE8', 
          zIndex: 1, 
          elevation: 1, 
        }}
        thumbIconBackgroundColor="#0C6BE8" 
        thumbIconImageSource={require('../assets/right-arrow.png')}
        railBackgroundColor="#FFFFFF"
        
        thumbIconBorderColor="#0C6BE8"
        thumbIconStyles={{ width: 30, height: 30 }}
        titleStyles={{ color: 'black', fontFamily: 'Fredoka', fontSize: 18 }} 
        containerStyles={{ marginTop: 20 }} 
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#0C6BE8',
    padding: 20,
    marginBottom: 10,
    marginLeft: -20,
    marginRight: -20,
    height: 230,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Fredoka',
    textAlign: 'center',
    padding: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  profileImage: {
    width: 300,
    height: 300,
    borderRadius: 60,
  },
  userName: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Fredoka',
  },
  professions: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'Fredoka',
  },
  aboutContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  aboutHeaderText: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Fredoka',
  },
  aboutText: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  linksContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  linksHeader: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Fredoka',
  },
  linksList: {
    alignItems: 'center',
  },
  linkText: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    marginBottom: 5,
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
  },
});

export default ProfilePreview;
