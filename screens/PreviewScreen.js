import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SwipeButton from 'rn-swipe-button';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';


const ProfilePreview = ({ route }) => {
  const navigation = useNavigation();
  const {  name, email, phone, password, about, salaryMax, salaryMin, selectedFields, selectedTitles, profileImageUri, additionalImageUri1, linkAddress1, linkAddress2, linkAddress3, linkAddress4, linkAddress5 } = route.params;
  console.log(name, email, phone, password, about, salaryMax, salaryMin, selectedFields, selectedTitles, profileImageUri, additionalImageUri1, linkAddress1, linkAddress2, linkAddress3, linkAddress4, linkAddress5);

  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [roles, setRoles] = useState([]);
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const response = await axios.get('https://joffer-backend-latest.onrender.com/Industries/GetAll');
        setIndustries(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching industries:', error);
      }
    };

    fetchIndustries();
  }, []);

  const getSelectedIndustries = () => {
    return industries.filter(industry => selectedFields.includes(industry.id));
  };

  const renderSelectedIndustries = () => {
    const selectedIndustries = getSelectedIndustries();
    return (
      <View style={styles.chosenFieldsContainer}>
        {selectedIndustries.map(industry => (
          <LinearGradient
            key={industry.id}
            colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
            style={styles.chosenField}
          >
            <Text style={styles.chosenFieldText}>{industry.name}</Text>
          </LinearGradient>
        ))}
      </View>
    );
  };

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get('https://joffer-backend-latest.onrender.com/Roles/GetAll');
        setRoles(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };

    fetchRoles();
  }, []);

  const getSelectedRoles = () => {
    return roles.filter(role => selectedTitles.includes(role.id));
  };

  const renderSelectedRoles = () => {
    const selectedRoles = getSelectedRoles();
    return (
      <View style={styles.chosenFieldsContainer}>
        {selectedRoles.map(role => (
          <LinearGradient
            key={role.id}
            colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
            style={styles.chosenField}
          >
            <Text style={styles.chosenFieldText}>
              {role.name}</Text>
          </LinearGradient>
        ))}
      </View>
    );
  };



  const handleNextPress = async () => {
    try {
      const response = await axios.post('https://joffer-backend-latest.onrender.com/Talent', {
        name: name,
        email: email,
        aboutMe: about,
        salaryMinimum: salaryMin,
        //  phone number ei toimi ollenkaan 
        avatarUrl: profileImageUri,
        image2Url: additionalImageUri1,
        gitHubUrl: linkAddress1,
        linkedInUrl: linkAddress2,
        mediumUrl: linkAddress3,
        dribbleUrl: linkAddress4,
        personalUrl: linkAddress5,
        isActive: true,
        auth0Id: "string",
        isPremium: false,
        employmentStatus: "Unemployed", 
       
      });
     
      console.log(response.data);
      const userIdFromResponse = response.data.id; 

    setUserId(userIdFromResponse);
    console.log('userId:', userIdFromResponse);
    navigation.navigate('Swipe', { userId: userIdFromResponse, name,email });

    } catch (error) {
      if (error.response) {
      
        console.error('Error response from server:', error.response.data);
      } else if (error.request) {
       
        console.error('No response received from server');
      } else {
        
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
      <View style={styles.profileContainer}>
        <Text style={[styles.userName, { color: '#F98A4B', fontSize: 26, marginBottom: 15 }]}>{name}</Text>
        <Image source={{ uri: profileImageUri }} style={styles.profileImage} />


      </View>
      <View style={styles.aboutContainer}>
        <Text style={[styles.aboutHeaderText, { color: 'black', fontSize: 18, fontFamily: 'Fredoka1' }]}>
          <Text style={{ color: '#FF7E33', fontSize: 20 }}>Email: </Text>{email}
        </Text>
        <Text style={[styles.aboutHeaderText, { color: 'black', fontSize: 18, fontFamily: 'Fredoka1' }]}>
          <Text style={{ color: '#FF7E33', fontSize: 20 }}>Salary minimun: </Text>{salaryMin}
        </Text></View>
        <View style={styles.aboutContainer1}>
        <Text style={[styles.aboutHeaderText, { color: '#FF7E33', fontSize: 22, fontFamily: 'Fredoka1' }]}>About me</Text>
        <Text style={[styles.aboutText, { color: 'black', fontSize: 18 }]}>{about}</Text>
        <Text style={[styles.aboutHeaderText, { color: '#FF7E33', fontSize: 20, fontFamily: 'Fredoka1' }]}>Industries:</Text>
        {loading ? <Text>Loading...</Text> : renderSelectedIndustries()}
        <Text style={[styles.aboutHeaderText, { color: '#FF7E33', fontSize: 20, fontFamily: 'Fredoka1' }]}>Roles: </Text>
        {loading ? <Text>Loading...</Text> : renderSelectedRoles()}
        

      </View>
      <View style={styles.linksContainer}>
        <Text style={[styles.linksHeader, { color: '#FF7E33', fontFamily: 'Fredoka1', fontSize: 18 }]}>Links and Socials</Text>
        <View style={styles.linksList}>
          <Text style={[styles.linkText, { color: '#FF7E33' }]}>{linkAddress1}, {linkAddress2},{linkAddress3},{linkAddress4},{linkAddress5}</Text>

        </View>
      </View>
      <SwipeButton
        title="    Save and start swiping!"
        onSwipeSuccess={handleNextPress}
        railStyles={{
          backgroundColor: 'rgba(255, 191, 129, 0.3)',
          borderColor: '#FF7E33',
          zIndex: 1,
          elevation: 1,
        }}
        thumbIconBackgroundColor="#FF7E33"
        thumbIconImageSource={require('../assets/right-arrow.png')}
        railBackgroundColor="#FFFFFF"

        thumbIconBorderColor="#FF7E33"
        thumbIconStyles={{ width: 30, height: 30 }}
        titleStyles={{ color: '#FF7E33', fontFamily: 'Fredoka1', fontSize: 18 }}
        containerStyles={{ marginTop: 20 }}
      />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
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
  profileContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,

  },
  profileImage: {
    width: 300,
    height: 300,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    shadowColor: '#FF7E33',
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  userName: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Fredoka',
  },
  professions: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
    fontFamily: 'Fredoka',
  },
  aboutContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  aboutContainer1: {
    marginTop: 20,
    alignItems: 'center',
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
  linksContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  linksHeader: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Fredoka',
  },
  linksList: {
    alignItems: 'center',
  },
  linkText: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    marginBottom: 5,
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
  },
  chosenFieldsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10,

  },
  chosenField: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  chosenFieldText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Fredoka1',
  },
});

export default ProfilePreview;