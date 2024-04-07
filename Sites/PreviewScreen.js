import React, { useRef, useState,useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import SwipeButton from 'rn-swipe-button';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfilePreview = () => {
  const navigation = useNavigation();
  const [registered, setRegistered] = useState(false);
  const [okPressed, setOkPressed] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    AsyncStorage.getItem('isRegistered').then((value) => {
      if(value !== null) {
        setRegistered(true);
      }
    })
  },[isFocused]);


  const handleOkPress = () => {
    AsyncStorage.setItem('okPressed', 'true').then(() => {
      setOkPressed(true);
    });
  };

 useEffect(() => {
    if (registered && okPressed) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'HowItWorksUser' }],
      });
    }
  }, [registered, okPressed]);

  return (
    <View>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./img/Joffer-Logobig.png')} style={styles.logo} />
        <Text style={styles.descriptionText}>Let advanced Joffer algorithms find your ideal career fit!</Text>
      </View>
      <View style={styles.profileContainer}>
        <Text style={[styles.userName, { color: '#F98A4B', fontSize: 26, marginBottom: 15 }]}>Users name</Text>
        <Image source={require('./img/Joffer-Logobig.png')} style={styles.profileImage} />
        <Text style={[styles.professions, { marginTop: 10 }]}>Coder ● Data Engineer ● Plain Awesome</Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={[styles.aboutHeaderText, { color: '#FF7E33', fontSize: 22 }]}>About Me</Text>
        <Text style={[styles.aboutText, { color: 'black', fontSize: 18 }]}>I'm a software engineer passionate about building mobile applications. I love hiking, reading, and being awesome in my free time.</Text>
        <Text style={[styles.professions, { marginTop: 20, fontSize: 18, color: '#FF7E33' }]}>A fun fact about me: </Text>
        <Text style={[styles.professions, { marginTop: 10 }]}>"happiest animal in the world" </Text>
      </View>
      <View style={styles.linksContainer}>
        <Text style={[styles.linksHeader, { color: '#FF7E33', fontSize: 18 }]}>Links and Socials</Text>
        <View style={styles.linksList}>
          <Text style={[styles.linkText, { color: '#FF7E33' }]}>https://example.com</Text>
          <Text style={[styles.linkText, { color: '#FF7E33' }]}>https://example2.com</Text>
        </View>
      </View>
      <SwipeButton
        title=" Save and start swiping!"
        onSwipeSuccess={() => {
          handleOkPress();}}
          railStyles={{ 
          backgroundColor: 'rgba(255, 191, 129, 0.3)',
          borderColor: '#FF7E33', 
          zIndex: 1, 
          elevation: 1, 
        }}
        thumbIconBackgroundColor="#FF7E33" 
        thumbIconImageSource={require('./img/Joffer-Logobig.png')}
        railBackgroundColor="#FFFFFF"
        
        thumbIconBorderColor="#FF7E33"
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
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#FF7E33',
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
   // fontFamily: 'Fredoka',
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

export default ProfilePreview;