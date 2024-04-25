import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import * as Font from 'expo-font'; 

export default function Start() {
  const navigation = useNavigation();

  
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/Fredoka-VariableFont_wdth,wght.ttf'),
      });
    }
    loadFonts();
  }, []); 


    return (
        <View style={styles.container}>
          <View style={styles.WelContainer}>
            <Text style={styles.Welcome}>Welcome to</Text>
          </View>
          <View style={styles.logoImage}>
            <Image source={require('./img/JofferLogo.png')}/>
          </View> 
          <View style={styles.WelContainer2}>
            <Text style={styles.Welcome2}>Your professional matchmaker!</Text>
          </View>
          <View style={styles.orangeButton}>
             <TouchableOpacity onPress ={() =>navigation.navigate("LoginScreen")} style={styles.buttonEmployee}>
              <Text style={styles.text1}>Talent</Text>
              <Text style={styles.text2}>For job seeker</Text>
             </TouchableOpacity>
          </View>
          <View style={styles.blueButton}>
             <TouchableOpacity onPress ={() =>navigation.navigate("CompanyLog")} style={styles.buttonCompany}>
              <Text style={styles.text1}>Company</Text>
              <Text style={styles.text2}>For talent seeker</Text>
             </TouchableOpacity>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center'
      },
      text1: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: 'bold'
      },
      text2: {
        color: '#ffff',
        fontSize: 14,
        fontWeight: '300'
      },
      orangeButton: {
        top: 325,
      }, 

      blueButton: {
        top: 75,
      },

      buttonCompany: {
        backgroundColor: '#1771E9',
        fontSize: 20,
        borderRadius: 40,
        width: 200,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },

      buttonEmployee:{
        backgroundColor: '#FF711E',
        fontSize: 20,
        borderRadius: 40,
        width: 200,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Fredoka',

      },
      logoImage: {
        top: 100
      },
      Welcome: {
        fontSize: 26,
        fontWeight: '500',
        fontFamily: 'Fredoka',

      }, 
      WelContainer: { 
        top: 80
      },
      Welcome2: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Fredoka',

      }, 
      WelContainer2: { 
        top: 120
      }
    });
