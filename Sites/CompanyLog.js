import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput,ScrollView, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';


const CompanyLog = () => {
  const navigation = useNavigation();


  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/Fredoka-VariableFont_wdth,wght.ttf'),
      });
    }
    loadFonts();
  }, []); 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passcode, setPasscode] = useState('');

  const handleRegisterPress = () => {
    navigation.navigate('Fields');
  };

  return (
    <View>
    <View style={styles.logoContainer}>
    <Image
      source={require('./img/Joffer-Logobig.png')}
      style={styles.logo}
    />
    <Text style={styles.descriptionText}>Let's find new talents!</Text>
  </View>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome, talent seeker!</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mail"
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
          <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
          <Text style={styles.registerText}>Forgot your password?</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.orText}>OR</Text>       
        <Text style={styles.orText}>Log in with recruiter passcode</Text>
        <View style={styles.inputContainer}>      
         <TextInput
            style={styles.input}
            placeholder="Passcode"
            secureTextEntry={true}
            value={passcode}
            onChangeText={setPasscode}
          />  
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.returnButton} onPress={() => console.log("Return pressed")}>
            <Text style={styles.returnButtonText}>Sign in</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={() =>navigation.navigate("CompanyRegister")}>
          <Text style={styles.registerText}>Create an account?</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff"
  },
  scrollView: {
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#0C6BE8',
    padding: 20,
    marginBottom: 0,
    marginLeft: -20,
    marginRight: -20,
    height: 230,
    
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
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'Fredoka',
    textAlign: 'center',
    color: 'white',
    fontWeight: '400',
  },
  orText: {
    fontFamily: 'Fredoka',
    textAlign: 'center',
    padding: 15,
    fontSize: 18,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  accountContainer: {
    padding: 10,
    alignItems: 'center',
  },
  accountText: {
    fontFamily: 'Fredoka',
    fontSize: 18,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  linkButton: {
    backgroundColor: '#0C6BE8',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  linksText: {
    fontFamily: 'Fredoka',
    fontSize: 20,
    color: 'white',
  },
  space: {
    width: 15,
  },
  registerButton: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  registerText: {
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
    backgroundColor: '#0C6BE8',
    width: 130,
  },
  returnButtonText: {
    fontSize: 18,
    fontFamily: 'Fredoka',
    color: 'white',
    
  },
});

export default CompanyLog;