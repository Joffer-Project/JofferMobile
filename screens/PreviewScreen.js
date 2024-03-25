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
        <Text style={styles.descriptionText}>Let advanced Joffer algorithms find your ideal career fit!</Text>
      </View>
      <View style={styles.profileContainer}>
        <Text style={[styles.userName, { color: '#F98A4B', fontSize: 26, marginBottom: 15 }]}>Joku Nimi</Text>
        <Image source={require('../assets/kuva1.jpg')} style={styles.profileImage} />
        <Text style={[styles.professions, { marginTop: 10 }]}>Coder ● Data Engineer ● Plain Awesome</Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={[styles.aboutHeaderText, { color: '#FAA16F', fontSize: 22 }]}>About Me</Text>
        <Text style={[styles.aboutText, { color: 'black', fontSize: 18 }]}>I'm a software engineer passionate about building mobile applications. I love hiking, reading, and being awesome in my free time.</Text>
      </View>
      <View style={styles.linksContainer}>
        <Text style={[styles.linksHeader, { color: '#FAA16F', fontSize: 18 }]}>Links</Text>
        <View style={styles.linksList}>
          <Text style={[styles.linkText, { color: '#FAA16F' }]}>https://example.com</Text>
          <Text style={[styles.linkText, { color: '#FAA16F' }]}>https://example2.com</Text>
        </View>
      </View>
      <SwipeButton
        title="    Save and start swiping!"
        onSwipeSuccess={handleNextPress}
        railStyles={{ 
          backgroundColor: 'rgba(255, 191, 129, 0.3)',
          borderColor: '#FAA16F', 
          zIndex: 1, 
          elevation: 1, 
        }}
        thumbIconBackgroundColor="#FAA16F" 
        thumbIconImageSource={require('../assets/right-arrow.png')}
        railBackgroundColor="#FFFFFF"
        
        thumbIconBorderColor="#FAA16F"
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
    backgroundColor: '#FAA16F',
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
