import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Modal,ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import * as Font from 'expo-font';
import RegisterScreen from './RegisterScreen';


const LoginScreen = () => {
  // Fredoka fontti
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
      });
    }
    loadFonts();
  }, []);
 //google+linkedin kirjautuminen? miten toteutetaan, google OAuth? SH1-fingerprint Androidille mistä?

  // muuttujat
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  //seuraava ikkuna
  const handleRegisterPress = () => {
    setShowRegisterModal(true);
  };

  return (
    
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/joffer2.png')} 
              style={styles.logo}
            />
            <Text style={styles.descriptionText}>Let advanced Joffer algorithms find your ideal career fit!</Text>
          </View>
          {/* welcome teksti */}
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome, unique talent!</Text>
          </View>

          {/* username ja password */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name/Mail"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          
          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.returnButton} onPress={() => console.log("Return pressed")}>
              <Text style={styles.returnButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.linksContainer}>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.linksText}>G</Text>
            </TouchableOpacity>
            <View style={styles.space} />
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.linksText}>L</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
            <Text style={styles.registerText}>Forgot your password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
            <Text style={styles.registerText}>Create an account!</Text>
          </TouchableOpacity>

          {/* RegisterScreen Modal */}
          <Modal
            visible={showRegisterModal}
            animationType="fade"
            onRequestClose={() => setShowRegisterModal(false)}
          >
            <RegisterScreen />
          </Modal>
        </View>
        </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    marginLeft:-20,
    marginRight: -20,
    height:230,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: 'Fredoka',
    marginTop: 0,
    marginBottom:10,
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Fredoka',
    textAlign: 'center',   
  },
  orText: {
    fontFamily: 'Fredoka',
    textAlign:'center',
    padding: 15,
    fontSize: 18,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20, 
  },
  accountContainer:{
    padding: 10,
    alignItems:'center',
  },
  accountText:{
    fontFamily: 'Fredoka',
    fontSize: 18,
  },
  linksContainer:{
    flexDirection:'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  linkButton: {
    backgroundColor: '#FAA16F',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  linksText:{
    fontFamily: 'Fredoka',
    fontSize: 20,
    color: 'white',
  },

  space: {
    width: 15,
  },
  registerButton:{
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  registerText:{
    fontFamily: 'Fredoka',
    fontSize: 18,
  },

  inputContainer: {
    marginBottom: 0,
    fontFamily: 'Fredoka',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 230,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: 'Fredoka',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  returnButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#FAA16F',
    width: 130,
  },
  returnButtonText: {
    fontSize: 18,
    fontFamily: 'Fredoka',
    color: 'black',
  },
});

export default LoginScreen;



