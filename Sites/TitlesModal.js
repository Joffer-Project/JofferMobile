
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const TitlesScreenModify = ({route}) => {
  const navigation = useNavigation();
  //const { companyId } = route.params;

  const [fields, setFields] = useState([]); 

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/Fredoka-VariableFont_wdth,wght.ttf'),
        'Fredoka1': require('../assets/Fredoka-Regular.ttf'),
      });
    }
    loadFonts();

  // ei toimi kun tuota endpointtia ei enään ole
    
    axios.get('https://joffer-backend-latest.onrender.com/Industries/GetAll')
      .then(response => {
      
        setFields(response.data);
      })
      .catch(error => {
        console.error('Error fetching roles:', error);
      });
  }, []);

  const [selectedFields, setSelectedFields] = useState([]);

  const toggleFieldSelection = (fieldId) => {
    const isSelected = selectedFields.includes(fieldId);
    if (isSelected) {
      setSelectedFields(selectedFields.filter(id => id !== fieldId));
    } else {
      setSelectedFields([...selectedFields, fieldId]);
    }
  };

  const renderFieldButton = ({ item }) => {
    const isSelected = selectedFields.includes(item.id);
    return (
      <TouchableOpacity
        style={[styles.fieldButton, isSelected && styles.selectedFieldButton]}
        onPress={() => toggleFieldSelection(item.id)}
      >
        <Text style={[styles.fieldButtonText, isSelected && styles.selectedFieldButtonText]}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const handleNextPress = () => {
    navigation.navigate('Titles'); //{companyId});
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500} 
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        
      <LinearGradient
          colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
          style={styles.logoContainer}
        >
          <Image
            source={require('./img/Joffer-Logobig.png')}
            style={styles.logo}
          />
          <Text style={styles.descriptionText}>Let advanced Joffer algorithms find your ideal talent!</Text>
        </LinearGradient>
        
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Roles</Text>
          <Text style={[styles.welcomeText, { fontSize: 16 }]}>Choose the roles that describes best the talent that you are searching for </Text>
        </View>

        <FlatList
          data={fields}
          renderItem={renderFieldButton}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          contentContainerStyle={styles.fieldButtonsContainer}
        />
        
        <View style={styles.buttonContainer}>
        <LinearGradient
    colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
    style={styles.returnButton}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
    <TouchableOpacity onPress={handleNextPress}>
      <Text style={styles.returnButtonText}>Save</Text>
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
  },
  scrollView: {
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    //backgroundColor: '#0C6BE8',
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
    fontFamily: 'Fredoka1',
    marginTop: 0,
    marginBottom: 10,
    padding: 10,
    color: '#0C6BE8',
    
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'Fredoka',
    textAlign: 'center',  
    padding: 10, 
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20, 
  },
  fieldButtonsContainer: {
    alignItems: 'center',
  },
  fieldButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'white',
    width: 100,
    borderWidth: 1,
    borderColor: '#0C6BE8',
  },
  selectedFieldButton: {
    backgroundColor: '#0C6BE8',
    color: 'white',
   
  },
  selectedFieldButtonText: {
    color: 'white',
   
  },
  fieldButtonText: {
    fontSize: 14,
    fontFamily: 'Fredoka1',
    color: '#0C6BE8',
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
    backgroundColor: '#0C6BE8',
    width: 130,
    
  },
  returnButtonText: {
    fontSize: 18,
    fontFamily: 'Fredoka1',
    color: 'white',
  },
});

export default TitlesScreenModify;