import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Modal, Alert } from 'react-native';
import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const SocialsScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
      });
    }
    loadFonts();
  }, []);

  const [profileImage, setProfileImage] = useState(null);
  const [links, setLinks] = useState([]);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.cancelled) {
        setProfileImage(result.uri);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick an image.');
    }
  };

  const handleAddLink = () => {
    
    setLinks([...links, 'https://example.com']);
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  const handlePreviewPress = () => {
    navigation.navigate('Preview');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500} 
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/joffer2.png')} 
            style={styles.logo}
          />
          <Text style={styles.descriptionText}>Let advanced Joffer algorithms find your ideal career fit!</Text>
        </View>
        
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Step 5/5: Socials and Docs</Text>
        </View>


        <View style={styles.profileContainer}>
          <Text style={styles.descriptionText}>Add a profile picture</Text>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <TouchableOpacity onPress={pickImage}>
              <Image source={require('../assets/profilepic.png')} style={styles.profileImage} />
              <View style={styles.addIconContainer}>
                <Text style={styles.addIcon}>+</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        
        <View style={styles.uploadContainer}>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadText}>Upload Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadText}>Upload CV</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.linksContainer}>
          <Text style={styles.linksHeader}>Links</Text>
          <View style={styles.linksList}>
            {links.map((link, index) => (
              <View key={index} style={styles.linkItem}>
                <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveLink(index)}>
                  <Ionicons name="remove-circle-outline" size={24} color="#FAA16F" />
                </TouchableOpacity>
                <Text style={styles.linkText}>{link}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.addLinkButton} onPress={handleAddLink}>
            <Ionicons name="add-circle-outline" size={24} color="#FAA16F" />
            <Text style={styles.addLinkButtonText}>Add a Link</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.PreviewContainer}>
          <TouchableOpacity style={styles.uploadButton} onPress={handlePreviewPress}>
            <Text style={styles.uploadText}>Preview Your Profile</Text>
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
    backgroundColor: '#FAA16F',
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
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  addIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FAA16F',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    fontSize: 20,
    color: 'white',
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
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  PreviewContainer:{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#FAA16F',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  uploadText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Fredoka',
  },
  linksContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  linksHeader: {
    fontSize: 18,
    fontFamily: 'Fredoka',
    marginBottom: 10,
  },
  linksList: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10,
  },
  removeButton: {
    marginRight: 5,
  },
  linkText: {
    fontFamily: 'Fredoka',
    fontSize: 16,
  },
  addLinkButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addLinkButtonText: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    marginLeft: 5,
    color: '#FAA16F',
  },
});

export default SocialsScreen;