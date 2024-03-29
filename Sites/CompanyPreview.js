import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SwipeButton from 'rn-swipe-button';


const CompanyPreview = () => {
  const navigation = useNavigation();

  return (
    <View>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./img/Joffer-Logobig.png')} style={styles.logo} />
        <Text style={styles.descriptionText}>Let's find new talents!</Text>
      </View>
      <View style={styles.profileContainer}>
        <Text style={[styles.userName, { color: '#1771E9', fontSize: 26, marginBottom: 15 }]}>IntelliTech Solutions</Text>
        <Image source={require('./img/logo.png')} style={styles.profileImage} />
        <Text style={[styles.professions, { marginTop: 10 }]}>Cybersecurity & IT -Services</Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={[styles.aboutHeaderText, { color: '#1771E9', fontSize: 22 }]}>About The Company</Text>
        <Text style={[styles.aboutText, { color: 'black', fontSize: 18 }]}>Customer satisfaction is at the heart of everything we do. We believe in building long-lasting relationships with our clients by providing exceptional service and ongoing support. </Text>
      </View>
      <View style={styles.linksContainer}>
        <Text style={[styles.linksHeader, { color: '#1771E9', fontSize: 18 }]}>Links and Socials</Text>
        <View style={styles.linksList}>
          <Text style={[styles.linkText, { color: '#1771E9' }]}>https://example.com</Text>
          <Text style={[styles.linkText, { color: '#1771E9' }]}>https://example2.com</Text>
        </View>
      </View>
      <SwipeButton
        title=" Save and start swiping!"
        onSwipeSuccess={() => navigation.navigate("AddApplication")}
        railStyles={{ 
          backgroundColor: 'rgba(255, 191, 129, 0.3)',
          borderColor: '#1771E9', 
          zIndex: 1, 
          elevation: 1, 
        }}
        thumbIconBackgroundColor='#1771E9'
        thumbIconImageSource={require('./img/Joffer-Logobig.png')}
        railBackgroundColor="#FFFFFF"
        
        thumbIconBorderColor='#1771E9'
        thumbIconStyles={{ width: 30, height: 30 }}
        titleStyles={{ color: 'black', /*fontFamily: 'Fredoka',*/ fontSize: 18 }} 
        containerStyles={{ marginTop: 20 }} 
      />
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff"

  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#1771E9',
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
    fontSize: 20,
    marginTop: 10,
   // fontFamily: 'Fredoka',
    textAlign: 'center',
    padding: 10,
    color: 'white', 
    fontWeight: '400',
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
    //fontFamily: 'Fredoka',
  },
  professions: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  //  fontFamily: 'Fredoka',
  },
  aboutContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  aboutHeaderText: {
    fontSize: 18,
    marginBottom: 10,
  //  fontFamily: 'Fredoka',
  },
  aboutText: {
 //   fontFamily: 'Fredoka',
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
   // fontFamily: 'Fredoka',
  },
  linksList: {
    alignItems: 'center',
  },
  linkText: {
  //  fontFamily: 'Fredoka',
    fontSize: 16,
    marginBottom: 5,
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
  },
});

export default CompanyPreview;