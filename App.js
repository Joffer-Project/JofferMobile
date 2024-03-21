
import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Modal, TextInput, BackHandler } from 'react-native';
import * as Font from 'expo-font';
import LoginScreen from './components/LoginScreen.js';// Import the LoginModal component

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  // fredoka fontti tässä ensin hankitaan käytettäväksi. Tämän lisäksi tuolla ylhäällä importeissa tuo import font
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('./assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);
  /// Tästä kun painaa niin aukeaa se login modal. Toistaiseksi käytetty modaleja, siirrytään react native navigationiin +screens
  const handleLoginPress = () => {
    setShowLoginModal(true);
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (showLoginModal) {
          setShowLoginModal(false);
          return true;
        }
        return false;
      }
    );

    return () => backHandler.remove();
  }, [showLoginModal]);



  if (!fontLoaded) {
    return null; // Render nothing until the font is loaded
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>WELCOME TO {'\n'}</Text>
      <Image source={require('./assets/joffer1.png')} style={styles.logo} />
      <Text style={styles.matchmakerText}>
        Your professional matchmaker! {'\n'}
      </Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonBox}>
          <View style={[styles.box, styles.talentBox]}>
            <View style={styles.xContainer}>
              <View style={[styles.xLine, styles.diagonalLine]} />
              <View style={[styles.xLine, styles.reverseDiagonalLine]} />
            </View>
            <TouchableOpacity style={[styles.button, styles.talentButton]} onPress={handleLoginPress}>
              <Text style={[styles.buttonText, styles.buttonTextFredoka]}>
                Talent
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.buttonDescription}>For job seekers!</Text>
          
        </View>
        <View style={styles.buttonBox}>
          <View style={[styles.box, styles.recruiterBox]}>
            <View style={styles.xContainer}>
              <View style={[styles.xLine, styles.diagonalLine]} />
              <View style={[styles.xLine, styles.reverseDiagonalLine]} />
            </View>
            <TouchableOpacity style={[styles.button, styles.companyButton]}>
              <Text style={[styles.buttonText, styles.buttonTextFredoka]}>
               Recruiter
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.buttonDescription}>
            For companies and recruiters!
          </Text>
        </View>
      </View>
      {/* Render the LoginModal component */}
      <Modal
        visible={showLoginModal}
        onRequestClose={() => setShowLoginModal(false)}
        
      >
        <LoginScreen />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 130,
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
  /*xContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  xLine: {
    position: 'absolute',
    backgroundColor: 'black',
    height: 5,
    width: '125%',
  },
  diagonalLine: {
    transform: [{ rotate: '45deg' }],
  },
  reverseDiagonalLine: {
    transform: [{ rotate: '-45deg' }],
  },*/
});

export default App;
