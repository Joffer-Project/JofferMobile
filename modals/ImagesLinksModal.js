import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Linking, Alert } from 'react-native';

const ImagesLinksModal = ({ visible, onClose }) => {
  const [companyLinks, setCompanyLinks] = useState([
    { id: 1, url: 'https://tesla.com', label: 'Tesla Website' },
    { id: 2, url: 'https://tesla.com/careers', label: 'Tesla Careers' }
  ]);

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.versionText}>Added Links</Text>
          <ScrollView style={styles.linksContainer}>
            {companyLinks.map(link => (
              <TouchableOpacity key={link.id} onPress={() => openLink(link.url)}>
                <Text style={styles.linkText}>{link.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
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
  linksContainer: {
    maxHeight: 200,
  },
  linkText: {
    color: '#0C6BE8',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#0C6BE8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ImagesLinksModal;
