import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView, Modal, TouchableWithoutFeedback, Switch } from 'react-native';
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
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width); // Alustetaan windowWidth

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'fredoka': require('../assets/Fredoka-VariableFont_wdth,wght.ttf'),
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
          <Image source={require('./img/Joffer-Logobig.png')} style={styles.logo} />
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
          <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={() => navigation.navigate("CompanyModAccount")}>
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
          <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={() => navigation.navigate('Start')}>
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
    <View style={styles.BottomButtonsContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate("AddApplication")} >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/add.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() => navigation.navigate('CompanyModify')} >
          <View style={styles.BottomButton}>
            <Image style={styles.userImage} source={require('./img/userAvatar.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CompanySwipe")} >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/SwipeLogo.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("CompanySettings")}>
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/setting.png')} />
          </View>
        </TouchableOpacity>
      </View>
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
    paddingBottom: 80,
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
  BottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    position: 'absolute',
    width: 'screenWidth',
    height: 90,
    width: "100%",
  },
  BottomButton: {
    width: 92,
    height: 90,
    borderTopWidth: 3,
    borderRadius: 10,
    borderLeftWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#1771E9',
    backgroundColor: "#fff"
  },
  addImage: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  userImage: {
    resizeMode: 'contain',
    width: 60,
    height: 50,
  },
  headerText: {
    color: "#fff",
    fontFamily: 'fredoka'
  }
});

export default Settings;






/*import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Dimensions, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import { useTheme } from '../context/ThemeContext.js';
import { ThemeProvider } from '../context/ThemeContext.js';
import { ScrollView } from 'react-native-gesture-handler';


const CompanySettings = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [versionModalVisible, setVersionModalVisible] = useState(false);
  const [themeModalVisible, setThemeModalVisible] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'fredoka': require('../assets/Fredoka-VariableFont_wdth,wght.ttf'),
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
/*
  const handleNavigateToModifyAccount = () => {
    navigation.navigate('ModifyAccount');
  }; 

  const handleSaveSettings = () => {
    // KONTSAA SAVE BUTTONIA VARTEN
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
    <ThemeProvider> 
    <View style={isDarkMode ? styles.containerDark : styles.containerLight}>
      <View>
      <LinearGradient
            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
            style={styles.logoContainer}>
        <Image
          source={require('./img/Joffer-Logobig.png')}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Let advanced Joffer algorithms find your ideal talent!</Text>
        </LinearGradient>
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
        <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} /*onPress={handleNavigateToModifyAccount}>
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
      </TouchableOpacity>}
            <Text style={styles.registerText}>Theme</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={() => navigation.navigate('Start')}>
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
    <View style={styles.BottomButtonsContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate("AddApplication")} >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/add.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity /* onPress={} >
          <View style={styles.BottomButton}>
            <Image style={styles.userImage} source={require('./img/userAvatar.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CompanySwipe")} >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/SwipeLogo.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("CompanySettings")}>
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/setting.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </ThemeProvider>
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
    height: 100,
  },
  settingsButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 20,
    height: 80,
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
  icon: {
    fontSize: 80,
    color: '#D9352D',
    
  },
  customIcon: {
    width: 60,  
    height: 60, 
    resizeMode: 'contain', 
  },
  BottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    position: 'absolute',
    width: 'screenWidth',
    height: 90,
    width: "100%",
  },
  BottomButton: {
    width: 92,
    height: 90,
    borderTopWidth: 3,
    borderRadius: 10,
    borderLeftWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#1771E9',
    backgroundColor: "#fff"
  },
  addImage: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  userImage: {
    resizeMode: 'contain',
    width: 60,
    height: 50,
  },
  headerText: {
    color: "#fff",
    fontFamily: 'fredoka'
  }
});

export default CompanySettings; */