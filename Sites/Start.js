import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function Start() {


  module.exports = {
    assets: ['./assets/fonts/'],
  };

    return (
        <View style={styles.container}>
          <View style={styles.WelContainer}>
            <Text style={styles.Welcome}>Welcome to</Text>
          </View>
          <View style={styles.logoImage}>
            <Image source={require('./img/WhiteLogoJoffer.png')}/>
          </View> 
          <View style={styles.WelContainer2}>
            <Text style={styles.Welcome2}>Your professional matchmaker!</Text>
          </View>
          <View style={styles.orangeButton}>
             <TouchableOpacity /*onPress ={onPress}*/ style={styles.buttonEmployee}>
              <Text style={styles.text1}>Employee</Text>
              <Text style={styles.text2}>For job seeker</Text>
             </TouchableOpacity>
          </View>
          <View style={styles.blueButton}>
             <TouchableOpacity /*onPress ={onPress}*/ style={styles.buttonCompany}>
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
      },
      logoImage: {
        top: 100
      },
      Welcome: {
        fontSize: 26,
        fontWeight: '500',
        fontFamily: ''
      }, 
      WelContainer: { 
        top: 80
      },
      Welcome2: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Roboto'
      }, 
      WelContainer2: { 
        top: 120
      }
    });
