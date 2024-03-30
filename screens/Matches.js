import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const profiles = [
  {
    id: 1,
    name: 'Nokia',
    
    image: require('../assets/Google.png'),
  },
  {
    id: 2,
    name: 'It',
   
    image: require('../assets/Google.png'),
  },

];

const MatchesScreen = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const handleSwipeLeft = () => {
   
    setCurrentProfileIndex(currentProfileIndex + 1);
  };

  const handleSwipeRight = () => {

    setCurrentProfileIndex(currentProfileIndex + 1);
  };

  return (
    <View style={styles.container}>
      {profiles.map((profile, index) => {
        if (index < currentProfileIndex) {
          return null; 
        }

        if (index > currentProfileIndex + 1) {
          return null; 
        }

        return (
          <View key={profile.id} style={styles.card}>
            <Image source={profile.image} style={styles.profileImage} />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity style={[styles.actionButton, styles.dislikeButton]} onPress={handleSwipeLeft}>
                <FontAwesomeIcon icon={faTimesCircle} size={24} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.likeButton]} onPress={handleSwipeRight}>
                <FontAwesomeIcon icon={faHeart} size={24} />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    height: 400,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  profileInfo: {
    padding: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    padding: 20,
    margin: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dislikeButton: {
    backgroundColor: '#FF6666',
  },
  likeButton: {
    backgroundColor: '#66CC66',
  },
});

export default MatchesScreen;
