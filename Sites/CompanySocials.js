import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, Modal, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import LinksSection from './Links';

const CompanySocials = ({ route }) => {
  const navigation = useNavigation();
  const { userId , name, email, password, about, salaryMax, salaryMin, selectedFields, selectedTitles } = route.params;

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/Fredoka-VariableFont_wdth,wght.ttf'),
      });
    }
    loadFonts();
  }, []);

  const [profileImageUri, setProfileImageUri] = useState(null);
  const [additionalImageUri1, setAdditionalImageUri1] = useState(null);
  const [additionalImageUri2, setAdditionalImageUri2] = useState(null);
  const [additionalImageUri3, setAdditionalImageUri3] = useState(null);

  const [linkAddress1, setLinkAddress1] = useState('');
  const [linkAddress2, setLinkAddress2] = useState('');
  const [linkAddress3, setLinkAddress3] = useState('');
  const [linkAddress4, setLinkAddress4] = useState('');
  const [linkAddress5, setLinkAddress5] = useState('');

  const pickImage = async (setImageUri) => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      console.log("Image Picker Result:", result); 

      if (result.assets && result.assets.length > 0) {
        const selectedUri = result.assets[0].uri;
        console.log("Selected Image URI:", selectedUri); 
        setImageUri(selectedUri);
      } else {
        console.log("Image selection cancelled or URI is undefined.");
      }
    } catch (error) {
      console.error('Error picking image:', error);
      alert('Error picking image. Please try again.');
    }
  };
  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <LinearGradient
            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
            style={styles.logoContainer}
        >
          <Image
            source={require('./img/Joffer-Logobig.png')}
            style={styles.logo}
          />
          <Text style={styles.descriptionText}>Let advanced Joffer algorithms find your ideal career fit!</Text>
        </LinearGradient>

        <View style={styles.welcomeContainer}>
          <Text style={[styles.welcomeText, { marginBottom: -10 }]}>Step 5/5: Images & Links</Text>
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={[styles.welcomeText, { marginBottom: -20 }]}>Profile Picture</Text>
        </View>

        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={() => pickImage(setProfileImageUri)}>
            <Image source={profileImageUri ? { uri: profileImageUri } : require('./img/Blue.png')} style={styles.profileImage} />
          </TouchableOpacity>

        </View>
        <Text style={[styles.welcomeText1,]}>Additional pictures</Text>
        {/* Additional images */}
        <View style={styles.additionalImagesContainer}>
          <TouchableOpacity onPress={() => pickImage(setAdditionalImageUri1)}>
            <Image source={additionalImageUri1 ? { uri: additionalImageUri1 } : require('./img/Blue.png')} style={styles.profileImage1} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => pickImage(setAdditionalImageUri3)}>
            <Image source={additionalImageUri3 ? { uri: additionalImageUri3 } : require('./img/Blue.png')} style={styles.profileImage1} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => pickImage(setAdditionalImageUri2)}>
            <Image source={additionalImageUri2 ? { uri: additionalImageUri2 } : require('./img/Blue.png')} style={styles.profileImage1} />
          </TouchableOpacity>
        </View>
        <LinksSection 
          linkAddress1={linkAddress1}
          setLinkAddress1={setLinkAddress1}
          linkAddress2={linkAddress2}
          setLinkAddress2={setLinkAddress2}
          linkAddress3={linkAddress3}
          setLinkAddress3={setLinkAddress3}
          linkAddress4={linkAddress4}
          setLinkAddress4={setLinkAddress4}
          linkAddress5={linkAddress5}
          setLinkAddress5={setLinkAddress5}
        />
        <View style={styles.PreviewContainer}>
          <TouchableOpacity style={styles.uploadButton} onPress={() => {
            console.log(linkAddress1);
            navigation.navigate('CompanyPreview', { userId, name, email, password, about, salaryMax, salaryMin, selectedFields, selectedTitles, profileImageUri, additionalImageUri1, linkAddress1, linkAddress2, linkAddress3, linkAddress4, linkAddress5});
            console.log( name, email, password, about, salaryMax, salaryMin, selectedFields, selectedTitles, linkAddress1, linkAddress2, linkAddress3, linkAddress4, linkAddress5, profileImageUri);
          }}>
            <LinearGradient
            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
            style={styles.buttonGradient}
            >
              <Text style={styles.uploadText}>Preview Your Profile</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  scrollView: {
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    padding: 20,
    marginBottom: 20,
    marginLeft: -20,
    marginRight: -20,
    height: 230,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
    marginTop: 15,
  },
  profileContainer: {
    borderColor: '#0C6BE8',
    borderRadius: 20,
    marginTop: 0,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 20,
    borderColor: '#0C6BE8',
  },
  profileImage1: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 10,

  },


  descriptionText: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Fredoka',
    textAlign: 'center',
    padding: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: 'Fredoka',
    marginTop: 0,
    marginBottom: 10,
    padding: 10,
    color: '#0C6BE8',
  },
  welcomeText1: {
    fontSize: 18,
    fontFamily: 'Fredoka',
    marginTop: 0,
    marginBottom: 10,
    padding: 10,
    color: '#0C6BE8',
    left: 90,
  },
  gradient: {
    borderRadius: 50,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  PreviewContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  uploadButton: {
    borderRadius: 10,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  uploadText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Fredoka',
    textAlign: 'center',
  },
  additionalImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,

  },

});

export default CompanySocials;
