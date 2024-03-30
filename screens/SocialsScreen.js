import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Modal, Alert } from 'react-native';
import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const SocialsScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka2':require ('../assets/fonts/Fredoka-Regular.ttf'),
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
        
      <LinearGradient
          colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
          style={styles.logoContainer}
        >
          <Image
            source={require('../assets/joffer2.png')}
            style={styles.logo}
          />
          <Text style={styles.descriptionText}>Let advanced Joffer algorithms find your ideal career fit!</Text>
        </LinearGradient>
        
        <View style={styles.welcomeContainer}>
          <Text style={[styles.welcomeText,{ marginBottom: -10 } ]}>Step 5/5: Images & Links</Text>
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={[styles.welcomeText,{ marginBottom: -20 } ]}>Images</Text>
        </View>


        <View style={styles.profileContainer}>
  {[...Array(3)].map((_, index) => (
    <TouchableOpacity key={index} style={styles.boxContainer} onPress={pickImage}>
      <View style={styles.addIconContainer}>
  <LinearGradient
    colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.gradient}
  >
    <Text style={styles.addIcon}>+</Text>
  </LinearGradient>
</View>
    </TouchableOpacity>
  ))}
</View>
        
        
        
<View style={styles.linksContainer}>
  <Text style={styles.linksHeader}>Links</Text>
  <View style={styles.profileContainer}>
  {[...Array(3)].map((_, index) => (
    <TouchableOpacity key={index} style={[styles.boxContainer, index !== 0 && { marginLeft: 20 }]} onPress={pickImage}>
      <View style={styles.addIconContainer}>
  <LinearGradient
    colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.gradient}
  >
    <Text style={styles.addIcon}>+</Text>
  </LinearGradient>
</View>
    </TouchableOpacity>
  ))}
</View>
  <TouchableOpacity style={styles.addLinkButton} onPress={handleAddLink}>
    <Ionicons name="add-circle-outline" size={24} color="#FAA16F" />
    <Text style={styles.addLinkButtonText}>Add a Link</Text>
  </TouchableOpacity>
</View>
        <View style={styles.PreviewContainer}>
          <TouchableOpacity style={styles.uploadButton} onPress={handlePreviewPress}>
            <LinearGradient
              colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
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
    //SbackgroundColor: '#FF7E33',
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
    borderColor:'#FF7E33',
    borderRadius: 20,
    marginTop: 0,
    marginBottom: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  boxContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor:'#FF7E33',
    borderRadius: 20,
    
  },
  
  addIconContainer: {
    
    bottom: 0,
    right: 0,
    backgroundColor: '#FF7E33',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  addIcon: {
    fontSize: 20,
    color: 'white',
    left: 9,
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
    fontFamily: 'Fredoka1',
    marginTop: 0,
    marginBottom: 10,
    padding: 10,
    color: '#FF7E33',
  },

  PreviewContainer:{
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
    fontFamily: 'Fredoka1',
    textAlign: 'center',
  },
  linksContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  linksHeader: {
    fontSize: 18,
    fontFamily: 'Fredoka1',
    marginBottom: 10,
    color: '#FF7E33',
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
    color: '#FF7E33',
  },
  gradient: {
    borderRadius: 50,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    
  },
});

export default SocialsScreen;
