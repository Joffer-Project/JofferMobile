import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation, useRoute} from '@react-navigation/native'; 
import { LinearGradient } from 'expo-linear-gradient';

const CompanyTitles = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { name, email, password, about, selectedFields} = route.params;

  
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/Fredoka-VariableFont_wdth,wght.ttf'),
        'Fredoka1': require('../assets/Fredoka-Regular.ttf'),
      });
    }
    loadFonts();
  }, []);

  const titles = [
    { id: 1, name: 'Tech' },
    { id: 2, name: 'Health' },
    { id: 3, name: 'Tech' },
    { id: 4, name: 'Tech' },
    { id: 5, name: 'Tech' },
    { id: 6, name: 'Tech' },
    { id: 7, name: 'Tech' },
    { id: 8, name: 'Other' },
    { id: 9, name: 'Other' },
    { id: 10, name: 'Other' },
    { id: 11, name: 'Other' },
    { id: 12, name: 'Other' },
    { id: 13, name: 'Other' },
  ];

  const [selectedTitles, setSelectedTitles] = useState([]);

  const toggleTitlesSelection = (titlesId) => {
    const isSelected = selectedTitles.includes(titlesId);
    if (isSelected) {
      setSelectedTitles(selectedTitles.filter(id => id !== titlesId));
    } else {
      setSelectedTitles([...selectedTitles, titlesId]);
    }
  };

  const renderTitlesButton = ({ item }) => {
    const isSelected = selectedTitles.includes(item.id);
    return (
      <TouchableOpacity
        style={[styles.fieldButton, isSelected && styles.selectedFieldButton]}
        onPress={() => toggleTitlesSelection(item.id)}
      >
        <Text style={[styles.fieldButtonText, isSelected && styles.selectedFieldButtonText]}>{item.name}</Text>
      </TouchableOpacity>
      
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -500} 
    >
      <LinearGradient
          colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
          style={styles.logoContainer}
        >
          <Image
            source={require('./img/Joffer-Logobig.png')}
            style={styles.logo}
          />
          <Text style={styles.descriptionText}>Let advanced Joffer algorithms find your ideal career fit!</Text>
      </LinearGradient>
        
      <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Step 4/5: Titles</Text>
          <Text style={[styles.welcomeText, { fontSize: 16 }]}>Select the roles that align best with your interests, knowledge, experience, and wishes.  </Text>
      </View>
      
        <FlatList
          data={titles}
          renderItem={renderTitlesButton}
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
          <TouchableOpacity onPress={() => {  
            navigation.navigate('CompanySocials',{name, password, email, about, selectedFields, selectedTitles});
            console.log(name, password, email, about, selectedFields, selectedTitles );
            }}>
            <Text style={styles.returnButtonText}>Next</Text>
          </TouchableOpacity>
          </LinearGradient>
        </View>
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
    backgroundColor: '#0C6BE8',
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
    color:'#0C6BE8',
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
   
  },
  selectedFieldButtonText:{
    color: 'white',
  },
  fieldButtonText: {
    fontSize: 18,
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
    width: 130,
    
  },
  returnButtonText: {
    fontSize: 18,
    fontFamily: 'Fredoka1',
    color: 'white',
  },
});

export default CompanyTitles;