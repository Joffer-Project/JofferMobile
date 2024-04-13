import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DeleteModal = ({ visible, onCancel, onDelete }) => {
    return (
      <Modal visible={visible} transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={[styles.modalText, styles.warningText]}>WARNING! By selecting 'YES', the entire account will be deleted without the possibility of recovery</Text>
            <Text style={styles.modalText}>Do you want to delete your company account?</Text>
            <Text style={styles.modalText}>Select 'Yes' to delete account or 'Cancel' to go back</Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={onCancel}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.deleteButton]} onPress={onDelete}>
                <Text style={styles.modalButtonText}>YES</Text>
              </TouchableOpacity>
            </View>
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
    },
    modalText: {
      fontSize: 16,
      marginBottom: 10,
      textAlign: 'center',
    },
    warningText: {
      color: 'red',
      fontWeight: 'bold',
      marginBottom: 20,
    },
    modalButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginTop: 10,
    },
    modalButton: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 5,
      backgroundColor: '#0C6BE8',
    },
    modalButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
    },
    cancelButton: {
      flex: 1,
    },
    deleteButton: {
      flex: 1,
      marginLeft: 10,
      backgroundColor: 'red',
    },
  });
  
  export default DeleteModal;