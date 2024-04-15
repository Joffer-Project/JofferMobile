import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView, Modal, TouchableWithoutFeedback, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import { useTheme } from '../../context/ThemeContext';

const Settings = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [versionModalVisible, setVersionModalVisible] = useState(false);
  const [themeModalVisible, setThemeModalVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width); // Alustetaan windowWidth

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'fredoka': require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
      });
      setFontLoaded(true);
    };
    loadFont();

    const updateDimensions = () => {
      setWindowWidth(Dimensions.get('window').width); // Päivitetään windowWidth, kun ikkunan koko muuttuu
    };

    Dimensions.addEventListener('change', updateDimensions); // Lisätään tapahtumankuuntelija ikkunan koon muutoksille

    return () => {
      Dimensions.removeEventListener('change', updateDimensions); // Poistetaan tapahtumankuuntelija komponentin purkamisen yhteydessä
    };
  }, []);

  const handleNavigateToHowItWorks = () => {
    navigation.navigate('HowItWorks');
  };

  const handleNavigateToMatches = () => {
    navigation.navigate('Matches');
  };

  const handleNavigateToModifyAccount = () => {
    navigation.navigate('ModifyAccount');
  };

  const handleNavigateToSupermatches = () => {
    navigation.navigate('Supermatches');
  };
  

  const handleGeneratePasscode = () => {
    // Function to handle generating passcode
  };

  const handleSaveSettings = () => {
    // Function to handle saving settings
  };

  const handleLogOut = () => {
    navigation.navigate('Home');
  };

  const handleToggleThemeModal = () => {
    setThemeModalVisible(!themeModalVisible);
  };

  const handleToggleVersionModal = () => {
    setVersionModalVisible(!versionModalVisible);
  };

  if (!fontLoaded) {
    return null;
  }
  const itemWidth = (windowWidth - 30) / 2;

  return (
    <LinearGradient colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']} style={isDarkMode ? styles.containerDark : styles.containerLight}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/joffer2.png')} style={styles.logo} />
          <Text style={styles.headerText}>Let advanced Joffer algorithms find your ideal talent!</Text>
        </View>
          <View style={styles.buttonContent}>
             <Text style={styles.subHeaderText}>Settings</Text>
           <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleNavigateToHowItWorks}>
            <LinearGradient
              colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
              style={styles.linearGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.registerText}>How to use Joffer</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleNavigateToMatches}>
            <LinearGradient
              colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
              style={styles.linearGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.registerText}>Matches</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleNavigateToSupermatches}>
            <LinearGradient
              colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
              style={styles.linearGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.registerText}>Supermatches</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleNavigateToModifyAccount}>
            <LinearGradient
              colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
              style={styles.linearGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.registerText}>Modify Account</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleGeneratePasscode}>
            <LinearGradient
              colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
              style={styles.linearGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.registerText}>Generate Passcode</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleToggleVersionModal}>
            <LinearGradient
              colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
              style={styles.linearGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.registerText}>Version</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleToggleThemeModal}>
            <LinearGradient
              colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
              style={styles.linearGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.registerText}>Theme</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleLogOut}>
            <LinearGradient
              colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
              style={styles.linearGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.registerText}>Log Out</Text>
            </LinearGradient>
          </TouchableOpacity>
          </View>
        </View>
      <Modal visible={versionModalVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={handleToggleVersionModal}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>App Version</Text>
              <Text style={styles.modalText}>Version: 1.0.0</Text>
              <Text style={styles.modalText}>Released: April 3, 2024</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal visible={themeModalVisible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={handleToggleThemeModal}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Theme</Text>
              <Text style={styles.modalText}>Toggle dark or light mode</Text>
              <Switch
                value={isDarkMode}
                onValueChange={toggleDarkMode}
                trackColor={{ false: "#bdbdbd", true: "#212121" }}
                thumbColor={isDarkMode ? "#ffffff" : "#ffffff"}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  </LinearGradient>
  );
};

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerDark: {
    flex: 1,
    backgroundColor: 'black',
  },  
  scrollView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    padding: 15,
    marginBottom: 20,
    marginLeft:-20,
    marginRight: -20,  
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  headerText: {
    fontFamily: 'Fredoka',
    fontSize: 18,
    color: 'black',
  },
  buttonContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    fontFamily: 'Fredoka1',
    minWidth: '95%',
    maxWidth: '95%',
    alignSelf: 'center',
  },
  subHeaderText: {
    fontFamily: 'Fredoka1',
    fontSize: 20,
    color: '#0C6BE8',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  settingsButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 20,
    height: 60,
    width: '90%', 
    minWidth: 350,
  },
  registerText: {
    fontFamily: 'Fredoka',
    fontSize: 18,
    color: 'white',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: '100%',
    width: '100%',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#0C6BE8',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default Settings;
