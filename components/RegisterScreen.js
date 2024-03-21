
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import * as Font from 'expo-font';
import RegisterScreen2 from './RegisterScreen2';

const RegisterScreen = () => {
  // Load the Fredoka font
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
      });
    }
    loadFonts();
  }, []);

  // State variables to store username and password
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showRegisterModal2, setShowRegisterModal2] = useState(false);

  const handleRegisterPress = () => {
    setShowRegisterModal2(true);
  };
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500} // Adjust the value as needed
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Logo with Welcome text */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/joffer2.png')} 
            style={styles.logo}
          />
          <Text style={styles.descriptionText}>Let advanced Joffer algorithms find your ideal career fit!</Text>
        </View>
        {/* Other content */}
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Step 1/5: Essentials</Text>
        </View>

        {/* Username and Password input fields */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Repeat Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        
        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.returnButton} onPress={handleRegisterPress}>
            <Text style={styles.returnButtonText}>Next</Text>
          </TouchableOpacity>
          {/* Register Screen Modal */}
          <Modal
            visible={showRegisterModal2}
            animationType="fade"
            onRequestClose={() => setShowRegisterModal2(false)}
          >
            <RegisterScreen2 />
          </Modal>
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
    padding: 10,
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Fredoka',
    textAlign: 'center',  
    padding:10, 
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20, 
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

export default RegisterScreen;