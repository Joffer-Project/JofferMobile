import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Dimensions, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import { useTheme } from '../context/ThemeContext';

const Settings = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [versionModalVisible, setVersionModalVisible] = useState(false);
  const [themeModalVisible, setThemeModalVisible] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
      });
      setFontLoaded(true);
    };
    loadFont();
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

  const handleSaveSettings = () => {
    // KONTSAA SAVE BUTTONIA VARTEN
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

  const windowWidth = Dimensions.get('window').width;
  const itemWidth = (windowWidth - 30) / 2;

  return (
    <View style={isDarkMode ? styles.containerDark : styles.containerLight}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/joffer2.png')}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Let advanced Joffer algorithms find your ideal talent!</Text>
      </View>
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
      </View>
      <View style={styles.buttonsContainer}>
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
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleToggleThemeModal}>
          <LinearGradient
            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
            style={styles.linearGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
         {/* KONTSA SAVE BUTTONIA VARTEN {} <TouchableOpacity style={[styles.saveButton, { width: itemWidth }]} onPress={handleSaveSettings}> 
        <LinearGradient
          colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text style={styles.registerText}>Save</Text> 
        </LinearGradient>
      </TouchableOpacity>*/}
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
    </View>
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
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#0C6BE8',
    padding: 20,
    marginBottom: 20,
    marginLeft: -20,
    marginRight: -20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
    marginTop: 20,
  },
  subHeaderText: {
    fontFamily: 'Fredoka1',
    fontSize: 20,
    color: '#0C6BE8',
    marginTop: 10,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  settingsButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 20,
    height: 100,
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 20,
    height: 40,
    marginTop: 30,
    left: 110,
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
  themeSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  themeSwitchLabel: {
    flex: 1,
    fontSize: 16,
    color: '#0C6BE8',
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
