import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ModalComponent from './companyModal'; 

const CompanyInfo = ({ company }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <LinearGradient
        colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
        style={styles.gradientContainer}
      >
        <View style={styles.container}>
          <Image source={company.image} style={styles.imageBackground} />
          <View style={styles.cardDetails}>
            <Text style={styles.companyName}>{company.name}</Text>
            <Text style={styles.jobDetails}>{company.jobDetails}</Text>
            <Text style={styles.jobDetails1}>{company.jobDetails1}</Text>
            <TouchableOpacity
              style={styles.moreInfoButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.moreInfoButtonText}>More Info</Text>
            </TouchableOpacity>
          </View>
       
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} />
          </Modal>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  gradientContainer: {
    borderRadius: 10,
    margin: 10,
  },
  container: {
    padding: 20,
    alignItems: 'center',
    height: 400,
    position: 'relative',
    overflow: 'hidden',
  },
  companyName: {
    fontFamily: 'Fredoka1',
    fontSize: 26,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 20,
  },
  jobDetails: {
    fontFamily: 'Fredoka1',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  jobDetails1: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  moreInfoButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    position: 'relative',
    
  },
  moreInfoButtonText: {
    fontFamily: 'Fredoka2',
    fontSize: 16,
    color: '#FF7E33',
  },
  imageBackground: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 30,
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
    fontFamily: 'Fredoka',
    color: '#FF7E33',
  },
  closeButton: {
    backgroundColor: '#FF7E33',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    position: 'relative',
  },
  closeButtonText: {
    fontFamily: 'Fredoka1',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default CompanyInfo;


