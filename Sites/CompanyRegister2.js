import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';


const CompanyRegister2 = () => {
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
          <Text style={styles.descriptionText}>Let's find new talents!</Text>
        </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        
        
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Step 2/5: Essentials</Text>
        </View>

     
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="About the company"
            value={about}
            onChangeText={setAbout}
            multiline={true}
            textAlignVertical="top" 
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.returnButton} onPress={() => navigation.navigate("CompanyFields")}>
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
    backgroundColor: "#fff"
  },
  scrollView: {
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#1771E9',
    padding: 20,
    marginBottom: 20,
    marginLeft:-20,
    marginRight: -20,
    height:200,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 0,
    marginTop: 15,
  },
  welcomeText: {
    fontSize: 20,
  //  fontFamily: 'Fredoka',
    marginTop: 0,
    marginBottom: 10,
    padding: 10,
  },
  descriptionText: {
    fontSize: 20,
    marginTop: 5,
  //  fontFamily: 'Fredoka',
    textAlign: 'center',  
    padding: 0, 
    color: 'white',
    fontWeight: '400', 
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
    height: 300,
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
    backgroundColor: '#1771E9',
    width: 130,
  },
  returnButtonText: {
    fontSize: 18,
   // fontFamily: 'Fredoka',
    color: 'white',
  },
});

export default CompanyRegister2;