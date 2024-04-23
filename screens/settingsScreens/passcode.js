import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SwipeButton from 'rn-swipe-button';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useTheme } from '../../context/ThemeContext';

const Passcode = ({route}) => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const navigation = useNavigation();
    const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);
    const { theme } = useTheme();
    const [passcode, setPasscode] = useState('');

    useEffect(() => {
        const loadFont = async () => {
          await Font.loadAsync({
            'fredoka': require('../../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
          });
          setFontLoaded(true);
        };
        loadFont();
    
        const updateDimensions = () => {
          setWindowWidth(Dimensions.get('window').width); // Päivitetään windowWidth, kun ikkunan koko muuttuu
        };
    
        Dimensions.addEventListener('change', updateDimensions); // Lisätään tapahtumankuuntelija ikkunan koon muutoksille
    
        return () => {
          Dimensions.removeEventListener('change', updateDimensions); // Poistetaan tapahtumankuuntelija komponentin purkamisen yhteydessä
        };
      }, []);
    
      const handleNextPress = () => {
        navigation.navigate('Swipe', {userId});
    };
    
    return (
        <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            <LinearGradient
                colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                style={styles.logoContainer}
            >
                <Image
                    source={require('../../assets/joffer2.png')}
                    style={styles.logo}
                />
                <Text style={styles.descriptionText}>Let advanced Joffer algorithms find your ideal talent!</Text>
            </LinearGradient>
            <View style={styles.profileContainer}>
            <Text style={[styles.aboutHeaderText, { color: '#0C6BE8', fontSize: 20,marginBottom: 20, fontFamily: 'Fredoka1' }]}>Recruiter passcode</Text>
            <Text style={styles.infoText}>The idea behind the recruiter's passcode is that instead of creating a password, your company's recruiters can use a passcode to log in to your company's Joffer service account.</Text>            
            <Text style={styles.infoText}>The recruiter's access code is intended to be weaker than a password, thus limiting the user's access to editing functions and other features.</Text>        
            <Text style={styles.infoText}>Change recruiter's password below, if you haven't set a passcode yet, do it in the same section.</Text>
            <Text style={[styles.infoText, styles.warningText]}>WARNING! Remember that changing the passcode will reset the old passcode and thus, the old passcode will become invalid</Text>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => setPasscode('')}>
                        <FontAwesomeIcon icon={faEdit} size={30} style={styles.icon} />
                    </TouchableOpacity>
                    <TextInput
                        style={[styles.inputField, { color: '#0C6BE8', fontSize: 20 }]}
                        value={passcode}
                        onChangeText={setPasscode}
                        placeholder="Set a new passcode"
                    />
                </View>
            </View>
            <SwipeButton
                title="    Save "
                onSwipeSuccess={handleNextPress}
                railStyles={{
                    backgroundColor: 'rgba(84, 150, 238, 1)',
                    borderColor: '#0C6BE8',
                    zIndex: 1,
                    elevation: 1,
                }}
                thumbIconBackgroundColor="#0C6BE8"
                thumbIconImageSource={require('../../assets/right-arrow.png')}
                railBackgroundColor="#FFFFFF"
                thumbIconBorderColor="#0C6BE8"
                thumbIconStyles={{ width: 30, height: 30 }}
                titleStyles={{ color: '#0C6BE8', fontFamily: 'Fredoka1', fontSize: 18 }}
                containerStyles={{ marginTop: 20 }}
            />
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal:20,
        paddingBottom:20,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: -0,
        marginLeft: -20,
        marginRight: -20,
        height: 230,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 10,
        marginTop: 30,
    },
    descriptionText: {
        fontSize: 15,
        marginTop: 10,
        fontFamily: 'Fredoka',
        textAlign: 'center',
        padding: 20,
    },
    warningText: {
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'Fredoka',
    },
    userName: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'Fredoka',
        width: 300,
    },
    aboutContainer: {
        marginTop: 20,
        alignItems: 'center',
        //borderWidth: 1,
        padding: 10,
    },
    aboutHeaderText: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: 'Fredoka',
    },
    aboutText: {
        fontFamily: 'Fredoka',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
       
    },
    icon: {
        color: 'rgba(84, 150, 238, 1)',
        marginBottom: 10,
    },
    icon1: {
        color: 'rgba(84, 150, 238, 1)',
        //marginBottom: 10,
        marginTop: 10,
    },
    gradient: {
        flex: 1,
        borderRadius: 10,
    },
    editIcon: {
        width: 20,
        height: 20,
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        height: 50,
    },
    inputField: {
        flex: 1,
        marginLeft: 10,
        
        borderWidth: 1,
        padding: 10,
        borderColor: '#0C6BE8',
        fontSize: 20,
        fontFamily: 'Fredoka',
    },
});

export default Passcode;