import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native'; 


const CompanyTitles = () => {
  const navigation = useNavigation(); 
  /*
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
      });
    }
    loadFonts();
  }, []); */


  const fields = [
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
    
    
   
  ];

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
        <Text style={styles.fieldButtonText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

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
    
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Step 4/5: Titles</Text>
          <Text style={styles.welcomeText}>Choose the titles you're interested in!</Text>
        </View>
      
      <FlatList
          data={fields}
          renderItem={renderFieldButton}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          contentContainerStyle={styles.fieldButtonsContainer}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.returnButton} onPress={() =>navigation.navigate("CompanySocials")}>
            <Text style={styles.returnButtonText}>Next</Text>
          </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 0, 
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
    height: 200,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 5,
    marginTop: 15,
  },
  welcomeText: {
    fontSize: 20,
   // fontFamily: 'Fredoka',
    marginTop: 0,
    marginBottom: 10,
    padding: 10,
  },
  descriptionText: {
    fontSize: 20,
    marginTop: 5,
   // fontFamily: 'Fredoka',
    textAlign: 'center',  
    padding: 0, 
    color: 'white',
    fontWeight: '400', 
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
    borderRadius: 0,
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'white',
    width: 100,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#1771E9',
  },
  selectedFieldButton: {
    backgroundColor: '#1771E9',
     // Change color for selected button
  },
  fieldButtonText: {
    fontSize: 18,
 //   fontFamily: 'Fredoka',
    color: 'black',
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
 //   fontFamily: 'Fredoka',
    color: 'white',
  },
});

export default CompanyTitles;