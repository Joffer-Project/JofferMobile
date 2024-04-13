import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';


const CompanyRegister = () => {
  const navigation = useNavigation();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
 
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/Fredoka-VariableFont_wdth,wght.ttf'),
      });
    }
    loadFonts();
  }, []);


  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500} // Adjust the value as needed
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <LinearGradient
            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
            style={styles.logoContainer}>
            <Image
            source={require('./img/Joffer-Logobig.png')}
            style={styles.logo}
            />
            <Text style={styles.descriptionText}>Let's find new talents!</Text>
            </LinearGradient>
        </View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Step 1/5: Essentials</Text>
        </View>

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
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.returnButton} onPress={async () => {
            try{
              const payload = {
                auth0Id: "string",
                name,
                email,
                password,
                accountType: "Company",
                isPremium: false,
                isActive: true
              };
            
          
              console.log('Payload:', payload);
          
              const response = await axios.post('https://joffer-backend-latest.onrender.com/Account', payload);
          
              console.log('Response:', response.data);
              const userId = response.data.id;
             
              console.log(userId);
              navigation.navigate('CompanyRegister2',{ userEmail: email });
            } catch (error) {
              console.error('Error creating account:', error);
          
              
              if (error.response) {
                
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
              } else if (error.request) {
                
                console.error('Request:', error.request);
              } else {
                
                console.error('Error message:', error.message);
              }
            }
          }}>
          <LinearGradient
            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
            style={styles.returnButton}>
            <Text style={styles.returnButtonText}>Next</Text> 
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
   fontFamily: 'Fredoka',
    marginTop: 0,
    marginBottom:10,
    padding: 10,
  },
  descriptionText: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'Fredoka',
    textAlign: 'center',  
    padding:10, 
    color: 'white', 
    fontWeight: '400',
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
    width: 130,
  },
  returnButtonText: {
    fontSize: 18,
    fontFamily: 'Fredoka',
    color: 'white',
  },
});

export default CompanyRegister;