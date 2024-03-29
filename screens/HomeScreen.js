import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
   
      <View style={styles.container}>
        <Text style={styles.welcomeText}>WELCOME TO {'\n'}</Text>
        <Image source={require('../assets/joffer1.png')} style={styles.logo} />
        <Text style={styles.matchmakerText}>
          Your professional matchmaker! {'\n'}
        </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonBox}>
            <TouchableOpacity style={[styles.box, styles.talentBox]} >
              <View style={styles.xContainer}>
                <View style={[styles.xLine, styles.diagonalLine]} />
                <View style={[styles.xLine, styles.reverseDiagonalLine]} />
              </View>
              <View style={[styles.button, styles.talentButton]}>
                <Text style={[styles.buttonText, styles.buttonTextFredoka]}>
                  Talent
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.buttonDescription}>For job seekers!</Text>
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity style={[styles.box, styles.recruiterBox]} onPress={() => navigation.navigate('Login')}>
              <View style={styles.xContainer}>
                <View style={[styles.xLine, styles.diagonalLine]} />
                <View style={[styles.xLine, styles.reverseDiagonalLine]} />
              </View>
              <View style={[styles.button, styles.companyButton]}>
                <Text style={[styles.buttonText, styles.buttonTextFredoka]}>
                  Recruiter
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.buttonDescription}>
              For companies and recruiters!
            </Text>
           </View>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 130,
    backgroundColor: 'white',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 0,
    fontFamily: 'Fredoka',
  },
  logo: {
    width: 250,
    height: 50,
    marginBottom: 0,
  },
  matchmakerText: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 40,
    fontFamily: 'Fredoka',
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '55%',
    alignSelf: 'center',
    maxHeight: 300,
  },
  buttonBox: {
    alignItems: 'center',
    marginBottom: 20,
  },
  box: {
    width: 150,
    height: 120,
    position: 'relative',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  talentBox: {
    backgroundColor: '#FEF3ED',
  },
  recruiterBox: {
    backgroundColor: '#F0F6FD',
  },
  button: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 0,
    zIndex: 1,
  },
  talentButton: {
    backgroundColor: '#F98A4B',
  },
  companyButton: {
    backgroundColor: '#6BA6E8',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Fredoka',
  },
  buttonTextFredoka: {
    fontFamily: 'Fredoka',
  },
  buttonDescription: {
    color: '#666',
    fontSize: 12,
    marginTop: 2,
    fontFamily: 'Fredoka',
  },
});

export default HomeScreen;