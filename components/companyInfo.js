import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';

const CompanyInfo = ({ company }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Ehkä fiksuin tähän lisätä tietoa companysta ja siitä job offerista. liian pieni näyttö!</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#FF7E33',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center', 
    height: 400,
    position: 'relative', 
    overflow: 'hidden',
    marginTop: 30,
  },
  companyName: {
    fontFamily: 'Fredoka',
    fontSize: 26,
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 20,
  },
  jobDetails: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
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
    fontFamily: 'Fredoka',
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
  },
  closeButton: {
    backgroundColor: '#FF7E33',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,

  },
  closeButtonText: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default CompanyInfo;

