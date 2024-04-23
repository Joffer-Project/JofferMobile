import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const TitlesScreen = ({ route, navigation }) => {
  const { userId, name, email, phone, password, about, salaryMax, salaryMin, selectedFields } = route.params;

  const [titles, setTitles] = useState([]); 
  const [selectedTitles, setSelectedTitles] = useState([]);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
        'Fredoka1': require('../assets/fonts/Fredoka-Regular.ttf'),
      });
    }
    loadFonts();

    // Fetch titles from API
    axios.get('https://joffer-backend-latest.onrender.com/Roles/GetAll')
      .then(response => {
        setTitles(response.data);
      })
      .catch(error => {
        console.error('Error fetching titles:', error);
      });
  }, []);

  const toggleTitleSelection = (titleId) => {
    const isSelected = selectedTitles.includes(titleId);
    if (isSelected) {
      setSelectedTitles(selectedTitles.filter(id => id !== titleId));
    } else {
      setSelectedTitles([...selectedTitles, titleId]);
    }
  };

  const handleNextPress = () => {
    navigation.navigate('Socials', {
      name,
      userId,
      email,
      phone,
      password,
      about,
      salaryMax,
      salaryMin,
      selectedFields,
      selectedTitles, // Pass selectedTitles to the next screen
    });
    console.log(name, email, phone, password, about, salaryMin, salaryMax, selectedFields, selectedTitles);
  };

  const renderTitleButton = ({ item }) => {
    const isSelected = selectedTitles.includes(item.id);
  
    return (
      <TouchableOpacity
        style={[styles.titleButton, isSelected && styles.selectedTitleButton]}
        onPress={() => toggleTitleSelection(item.id)}
      >
        <Text style={[styles.titleButtonText, isSelected && styles.selectedTitleButtonText]}>{item.name}</Text>
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
        <Text style={styles.welcomeText}>Step 4/5: Roles</Text>
        <Text style={[styles.welcomeText, { fontSize: 16 }]}>Select the roles that align best with your interests, knowledge, experience, and wishes. </Text>
      </View>
  
      <FlatList
        data={titles}
        renderItem={renderTitleButton}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.titleButtonsContainer}
      />
      
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0, 
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    padding: 20,
    marginBottom: 20,
    marginLeft: -20,
    marginRight: -20,
    height: 230,
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
    color: '#FF7E33',
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
  titleButtonsContainer: {
    alignItems: 'center',
  },
  titleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'white',
    width: 100,
    borderWidth: 1,
    borderColor: '#FF7E33',
  },
  selectedTitleButton: {
    backgroundColor: '#FF7E33',
    color: 'white',
  },
  selectedTitleButtonText: {
    color: 'white',
  },
  titleButtonText: {
    fontSize: 14,
    fontFamily: 'Fredoka1',
    color: '#FF7E33',
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
    fontFamily: 'Fredoka1',
    color: 'white',
  },
});

export default TitlesScreen;