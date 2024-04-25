import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { useNavigation, useIsFocused,  useRoute } from '@react-navigation/native';
import SwipeButton from 'rn-swipe-button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native';

const CompanyPreview = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userId, name, email, password, about, salaryMax, salaryMin, selectedFields, selectedTitles, profileImageUri, additionalImageUri1, linkAddress1, linkAddress2, linkAddress3, linkAddress4, linkAddress5} = route.params;

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
        routes: [{ name: 'HowItWorks' }],
      });
    }
  }, [registered, okPressed]);


  return (
    <View>
    <ScrollView contentContainerStyle={styles.container}>
      <View>
      <LinearGradient
            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
            style={styles.logoContainer}>
        <Image source={require('./img/Joffer-Logobig.png')} style={styles.logo} />
        <Text style={styles.descriptionText}>Let's find new talents!</Text>
        </LinearGradient>
      </View>
      <View style={styles.profileContainer}>
        <Text style={[styles.userName, { color: '#1771E9', fontSize: 26, marginBottom: 15 }]}>IntelliTech Solutions</Text>
        <Image source={{ uri: profileImageUri }} style={styles.profileImage} />
        <Text style={[styles.professions, { marginTop: 10 }]}>Cybersecurity & IT -Services</Text>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={[styles.aboutHeaderText, { color: '#1771E9', fontSize: 22 }]}>About The Company</Text>
        <Text style={[styles.aboutText, { color: 'black', fontSize: 18 }]}>Customer satisfaction is at the heart of everything we do. We believe in building long-lasting relationships with our clients by providing exceptional service and ongoing support. </Text>
      </View>
      <View style={styles.linksContainer}>
        <Text style={[styles.linksHeader, { color: '#1771E9', fontSize: 18 }]}>Links and Socials</Text>
        <View style={styles.linksList}>
          <TouchableOpacity>
          <Text source={{ uri: linkAddress1 }} onPress={() => Linking.openURL(linkAddress1)} style={[styles.linkText, { color: '#1771E9' }]}>{linkAddress1}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text source={{ uri: linkAddress2 }} onPress={() => Linking.openURL(linkAddress2)} style={[styles.linkText, { color: '#1771E9' }]}>{linkAddress2}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SwipeButton
        title=" Save and start swiping!"
        onSwipeSuccess={() => {
            handleOkPress();
            navigation.navigate("HowItWorks")
          }}
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
    backgroundColor: "#fff"

  },
  logoContainer: {
    alignItems: 'center',
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