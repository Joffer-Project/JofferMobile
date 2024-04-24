import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const AboutCompanyModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.versionText}>About the company</Text>
          <ScrollView style={{ maxHeight: 200 }}>
            <Text style={styles.modalText}>
              Founded in 2003 by a group of engineers with a vision for sustainable transportation, Tesla has embarked on an extraordinary journey to revolutionize the automotive industry and beyond.
            </Text>
          </ScrollView>
          <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 300, // Set modal width
  },
  versionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0C6BE8',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#0C6BE8',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AboutCompanyModal;
