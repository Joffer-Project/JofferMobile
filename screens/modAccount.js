import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, ScrollView, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import { useTheme } from '../context/ThemeContext';
import CompanyInfoModal from '../modals/CompanyInfoModal';
import FieldsModal from '../modals/FieldsModal';
import TitlesModal from '../modals/TitlesModal';
import ImagesLinksModal from '../modals/ImagesLinksModal';
import AboutCompanyModal from '../modals/AboutCompanyModal';
import ModifyApplicationsModal from '../modals/ModifyApplicationsModal';
import DeleteModal from '../modals/DeleteModal';

const ModAccount = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);
  const { isDarkMode } = useTheme();
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
  //const [showCompanyInfoModal, setShowCompanyInfoModal] = useState(false);
  const [showFieldsModal, setShowFieldsModal] = useState(false);
  const [showTitlesModal, setShowTitlesModal] = useState(false);
  const [showImagesLinksModal, setShowImagesLinksModal] = useState(false);
  const [showAboutCompanyModal, setShowAboutCompanyModal] = useState(false);
  const [showModifyApplicationsModal, setShowModifyApplicationsModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
      });
      setFontLoaded(true);
    };
    loadFont();

    const updateDimensions = () => {
      setWindowWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', updateDimensions);

    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    };
  }, []);

  const handleNavigateTo = (screenName) => {
    navigation.navigate(screenName);
  };
  const handleNavigateBack = () => {
    navigation.goBack();
  };
  const navigateToFieldsProfile = () => {
    navigation.navigate('FModify'); //{companyId});
  };
  const navigateToTitlesProfile = () => {
    navigation.navigate('TModify'); //{companyId});
  };
  const handleProfileModifyPress = () => {
    navigation.navigate('ProfileModify');
  };


  const handleDeleteAccount = () => {
    // Tässä voit toteuttaa logiikan tilin poistamiselle
    // Esimerkiksi: Kutsu API:ta tai suorita tarvittavat toiminnot
    // Lopuksi siirry takaisin edelliseen näkymään
    navigation.goBack();
  };

  // Lisää funktio, joka käsittelee DeleteModalin "Kyllä" painikkeen painalluksen
  const handleDeleteConfirmation = () => {
    handleDeleteAccount(); // Kutsu tilin poistofunktiota täällä
  };

  if (!fontLoaded) {
    return null;
  }

  const itemWidth = (windowWidth - 30) / 2;

  return (
    <LinearGradient colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']} style={isDarkMode ? styles.containerDark : styles.containerLight}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/joffer2.png')} style={styles.logo} />
          <Text style={styles.headerText}>Let advanced Joffer algorithms find your ideal talent!</Text>
        </View>
        <View style={styles.buttonContent}>
          <Text style={styles.subHeaderText}>Customize account and applications below</Text>
          <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleProfileModifyPress}>
              <LinearGradient
                colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.registerText}>Company Information</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={navigateToFieldsProfile}>
              <LinearGradient
                colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.registerText}>Industries</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={navigateToTitlesProfile}>
              <LinearGradient
                colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.registerText}>Roles</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={() => setShowImagesLinksModal(true)}>
              <LinearGradient
                colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.registerText}>Images and Links</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={() => setShowAboutCompanyModal(true)}>
              <LinearGradient
                colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.registerText}>About the company</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={() => setShowModifyApplicationsModal(true)}>
              <LinearGradient
                colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.registerText}>Modify Applications</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={() => setShowDeleteModal(true)}>
              <LinearGradient
                colors={['rgba(238, 84, 84, 1)', 'rgba(230, 0, 0, 1)']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.registerText}>Delete Account</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* Modaalit */}
      {/*<CompanyInfoModal
        visible={showCompanyInfoModal}
        onClose={() => setShowCompanyInfoModal(false)}
      />*/}
      <FieldsModal
        visible={showFieldsModal}
        onClose={() => setShowFieldsModal(false)}
      />
      <TitlesModal
        visible={showTitlesModal}
        onClose={() => setShowTitlesModal(false)}
      />
      <ImagesLinksModal
        visible={showImagesLinksModal}
        onClose={() => setShowImagesLinksModal(false)}
      />
      <AboutCompanyModal
        visible={showAboutCompanyModal}
        onClose={() => setShowAboutCompanyModal(false)}
      />
      <ModifyApplicationsModal
        visible={showModifyApplicationsModal}
        onClose={() => setShowModifyApplicationsModal(false)}
      />
      <DeleteModal
        visible={showDeleteModal}
        onCancel={() => setShowDeleteModal(false)}
        onDelete={handleDeleteConfirmation} // Käsittele tilin poistovahvistus täällä
      />
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
    marginLeft: -20,
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
});

export default ModAccount;
