import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';


const RegisterScreen2 = () => {
    const navigation = useNavigation();

    /*
  const navigation = useNavigation();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
      });
    }
    loadFonts();
  }, []);*/

  const [about, setAbout] = useState('');
  const [fact, setFact] = useState('');

  // Navigate to the FieldsScreen

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
          <Text style={styles.descriptionText}>Let advanced Joffer algorithms find your ideal career fit!</Text>
        </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        
        
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Step 2/5: Essentials</Text>
        </View>

     
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="About me"
            value={about}
            onChangeText={setAbout}
            multiline={true}
            textAlignVertical="top" 
          />
          <TextInput
            style={styles.input}
            placeholder="A fun fact about me"
            value={fact}
            onChangeText={setFact}
            multiline={true}
             textAlignVertical="top" 
          />
          
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.returnButton} onPress={() => navigation.navigate("FieldsScreen")}>
            <Text style={styles.returnButtonText}>Next</Text>
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
    //20
  },
  scrollView: {
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#FF7E33',
    padding: 20,
    marginBottom: 20,
    marginLeft:-20,
    marginRight: -20,
    height:230,
    
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
    marginTop: 15,
  },
  welcomeText: {
    fontSize: 20,
  //  fontFamily: 'Fredoka',
    marginTop: 0,
    marginBottom:10,
    padding: 10,
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 10,
  //  fontFamily: 'Fredoka',
    textAlign: 'center',  
    padding:10, 
  },
 
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20, 
  },
 
  inputContainer: {
    marginBottom: 0,
   // fontFamily: 'Fredoka',
    alignItems: 'center',
    
    
  },
  input: {
    height: 150,
    width: 230,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
   // fontFamily: 'Fredoka',
    padding: 5,
    
    
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 45,
  },
  returnButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#FF7E33',
    width: 130,
  },
  returnButtonText: {
    fontSize: 18,
   // fontFamily: 'Fredoka',
    color: 'black',
  },
});

export default RegisterScreen2;