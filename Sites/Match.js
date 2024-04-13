import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { LinearGradient } from 'expo-linear-gradient';

const MatchScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <LinearGradient
      colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
      style={styles.gradientContainer}
    >
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileItem}>
            <Image source={require('../assets/Google.png')} style={styles.profileImage} />
            <Text style={styles.nameText}>Company Name</Text>
          </View>
          <View style={styles.profileItem}>
            <Image source={require('../assets/kuva1.jpg')} style={styles.profileImage} />
            <Text style={styles.nameText}>User Name</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.heartContainer}>
          <FontAwesomeIcon icon={faHeart} size={60} style={styles.heartIcon} />
        </TouchableOpacity>
        <View style={styles.matchContainer}>
          <Text style={styles.matchText}>ITS A MATCH!</Text>
          <TouchableOpacity onPress={openModal} style={styles.button}>
            <Text style={styles.buttonText}>Click here to contact the company!</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Modal content goes here</Text>
              <Button title="Close" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 0,
    borderWidth: 3,
    borderColor: 'black',
  },
  nameText: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    marginTop: 5,
    color: 'white',
  },
  heartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    color: 'red',
  },
  matchContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  matchText: {
    fontFamily: 'Fredoka2',
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    color: '#FF7E33',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default MatchScreen;
