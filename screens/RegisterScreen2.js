import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';


const RegisterScreen2 = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
        'Fredoka1': require('../assets/fonts/Fredoka-Regular.ttf'),
      });
    }
    loadFonts();
  }, []);

  const [about, setAbout] = useState('');
  const [salaryMax, setSalaryMax] = useState('');
  const [salaryMin, setSalaryMin] = useState('');

  // Navigate to the FieldsScreen
  const handleNextPress = async () => {
    const { name, email, phone, password, about, salaryMax, salaryMin } = route.params;

    // Use the values from the previous screen as needed
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);
    console.log('About Me:', about);
    console.log('Salary Max:', salaryMax);
    console.log('Salary Min:', salaryMin);

    navigation.navigate('Fields', {
      name,
      email,
      phone,
      password,
      about,
      salaryMax,
      salaryMin,
    });
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
          <Text style={styles.welcomeText}>Step 2/5: Essentials</Text>
        </View>

     
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input1}
            placeholder="About me"
            value={about}
            onChangeText={(text) => setAbout(text)}
            multiline={true}
            textAlignVertical="top" 
          />
          <TextInput
            style={styles.input}
            placeholder="Salary Min"
            value={salaryMin}
            onChangeText={setSalaryMin}
            multiline={true}
             textAlignVertical="top" 
          />
          <TextInput
            style={styles.input}
            placeholder="Salary Max"
            value={salaryMax}
            onChangeText={setSalaryMax}
            multiline={true}
             textAlignVertical="top" 
          />
          
        </View>
        
        
        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
            style={styles.returnButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <TouchableOpacity onPress={handleNextPress}>
              <Text style={styles.returnButtonText}>Next</Text>
            </TouchableOpacity>
          </LinearGradient>
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
    marginTop: 19,
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: 'Fredoka1',
    marginTop: 0,
    marginBottom:10,
    padding: 10,
    color: '#FF7E33',
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
    height: 50,
    width: 230,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: 'Fredoka',
    padding: 5,
    
    
  },
  input1: {
    height: 150,
    width: 230,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: 'Fredoka',
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
    
    width: 130,
  },
  returnButtonText: {
    fontSize: 18,
    fontFamily: 'Fredoka1',
    color: 'white',
  },
});

export default RegisterScreen2;
