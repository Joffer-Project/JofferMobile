import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Modal, Alert } from 'react-native';
 // import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const CompanySocials = () => {
  const navigation = useNavigation();
/*
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
      });
    }
    loadFonts();
  }, []);
*/
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

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500} 
      
    >
          <View style={styles.logoContainer}>
          <Image
            source={require('./img/Joffer-Logobig.png')} 
            style={styles.logo}
          />
          <Text style={styles.descriptionText}>Let's find new talents!</Text>
        </View>
        
      <ScrollView contentContainerStyle={styles.scrollView}>
        
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Step 5/5: Socials And Links</Text>
        </View>


        <View style={styles.profileContainer}>
          <Text style={styles.descriptionText}>Add Company Logo</Text>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <TouchableOpacity onPress={pickImage}>
              <Image source={require('./img/userAvatar.png')} style={styles.profileImage} />
              <View style={styles.addIconContainer}>
                <Text style={styles.addIcon}>+</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        
        <View style={styles.uploadContainer}>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadText}>Upload Images</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.linksContainer}>
          <Text style={styles.linksHeader}>Links</Text>
          <View style={styles.linksList}>
            {links.map((link, index) => (
              <View key={index} style={styles.linkItem}>
                <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveLink(index)}>
                  <Ionicons name="remove-circle-outline" size={24} color='#1771E9' />
                </TouchableOpacity>
                <Text style={styles.linkText}>{link}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.addLinkButton} onPress={handleAddLink}>
            <Ionicons name="add-circle-outline" size={24} color='#1771E9' />
            <Text style={styles.addLinkButtonText}>Add a Link</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.PreviewContainer}>
          <TouchableOpacity style={styles.uploadButton} onPress={() => navigation.navigate("CompanyPreview")}>
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
    backgroundColor: "#fff"
  },
  scrollView: {
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    backgroundColor:  '#1771E9',
    padding: 20,
    marginBottom: 10,
    marginLeft: -20,
    marginRight: -20,
    height: 200,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 5,
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
    backgroundColor:  '#1771E9',
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
    fontSize: 20,
    marginTop: 5,
   // fontFamily: 'Fredoka',
    textAlign: 'center', 
    color: 'white', 
    padding: 0, 
    
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20, 
  },
  welcomeText: {
    fontSize: 20,
  //  fontFamily: 'Fredoka',
    marginTop: 10,
    padding: 0,
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
    backgroundColor:  '#1771E9',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  uploadText: {
    fontSize: 16,
    color: 'white',
  //  fontFamily: 'Fredoka',
  },
  linksContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  linksHeader: {
    fontSize: 18,
  //  fontFamily: 'Fredoka',
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
  //  fontFamily: 'Fredoka',
    fontSize: 16,
  },
  addLinkButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addLinkButtonText: {
//    fontFamily: 'Fredoka',
    fontSize: 16,
    marginLeft: 5,
    color: '#1771E9',
  },
});

export default CompanySocials;