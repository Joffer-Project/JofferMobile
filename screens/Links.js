import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Modal } from 'react-native';
import * as Font from 'expo-font';

import linkedinLogo from '../assets/linked.png';
import JofferLogo from '../assets/personal.png';
import githubLogo from '../assets/Property 1=Default.png';

const LinksSection = ({ 
  linkAddress1, 
  setLinkAddress1, 
  linkAddress2, 
  setLinkAddress2, 
  linkAddress3, 
  setLinkAddress3, 
  linkAddress4, 
  setLinkAddress4, 
  linkAddress5, 
  setLinkAddress5 
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentLinkNumber, setCurrentLinkNumber] = useState(1);

    useEffect(() => {
        async function loadFonts() {
          await Font.loadAsync({
            'Fredoka2': require('../assets/fonts/Fredoka-Regular.ttf'),
            'Fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
          });
        }
        loadFonts();
      }, []);
    console.log("Link Address 1:", linkAddress1);
    const handleLinkPress = (linkNumber) => {
      setCurrentLinkNumber(linkNumber);
      setModalVisible(true);
    };
  
    const handleSaveLink = () => {
        switch (currentLinkNumber) {
          case 1:
            setLinkAddress1(linkAddress1);
            console.log("Link Address 1 saved:", linkAddress1);
            break;
          case 2:
            setLinkAddress2(linkAddress2);
            console.log("Link Address 2 saved:", linkAddress2);
            break;
          case 3:
            setLinkAddress3(linkAddress3);
            console.log("Link Address 3 saved:", linkAddress3);
            break;
          case 4:
            setLinkAddress4(linkAddress4);
            console.log("Link Address 4 saved:", linkAddress4);
            break;
          case 5:
            setLinkAddress5(linkAddress5);
            console.log("Link Address 5 saved:", linkAddress5);
            break;
          default:
            break;
        }
        setModalVisible(false);
      };
  
      const handleCancel = () => {
        switch (currentLinkNumber) {
          case 1:
            setLinkAddress1('');
            console.log("Link Address 1 cancelled.");
            break;
          case 2:
            setLinkAddress2('');
            console.log("Link Address 2 cancelled.");
            break;
          case 3:
            setLinkAddress3('');
            console.log("Link Address 3 cancelled.");
            break;
          case 4:
            setLinkAddress4('');
            console.log("Link Address 4 cancelled.");
            break;
          case 5:
            setLinkAddress5('');
            console.log("Link Address 5 cancelled.");
            break;
          default:
            break;
        }
        setModalVisible(false);
      };
  
    return (
      <View style={styles.linksHeader}>
        <Text style={styles.linksHeader1}>Links</Text>
        <View style={styles.linksContainer}>
          {/* Link 1 */}
          <TouchableOpacity onPress={() => handleLinkPress(1)} style={styles.linkContainer}>
            <Image source={githubLogo} style={styles.logo1} />
          </TouchableOpacity>
          {/* Link 2 */}
          <TouchableOpacity onPress={() => handleLinkPress(2)} style={styles.linkContainer}>
            <Image source={linkedinLogo} style={styles.logo1} />
          </TouchableOpacity>
          {/* Link 3 */}
          <TouchableOpacity onPress={() => handleLinkPress(3)} style={styles.linkContainer}>
            <Image source={JofferLogo} style={styles.logo1} />
          </TouchableOpacity>
          {/* Link 4 */}
          <TouchableOpacity onPress={() => handleLinkPress(4)} style={styles.linkContainer}>
            <Image source={JofferLogo} style={styles.logo1} />
          </TouchableOpacity>
          {/* Link 5 */}
          <TouchableOpacity onPress={() => handleLinkPress(5)} style={styles.linkContainer}>
            <Image source={JofferLogo} style={styles.logo1} />
          </TouchableOpacity>
        </View>
  
        {/* Modal for adding link */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <TextInput
  style={styles.input}
  placeholder="Enter Link Address"
  value={
    currentLinkNumber === 1 ? linkAddress1 :
    currentLinkNumber === 2 ? linkAddress2 :
    currentLinkNumber === 3 ? linkAddress3 :
    currentLinkNumber === 4 ? linkAddress4 :
    linkAddress5
  }
  onChangeText={text => {
    switch (currentLinkNumber) {
      case 1:
        setLinkAddress1(text);
        break;
      case 2:
        setLinkAddress2(text);
        break;
      case 3:
        setLinkAddress3(text);
        break;
      case 4:
        setLinkAddress4(text);
        break;
      case 5:
        setLinkAddress5(text);
        break;
      default:
        break;
    }
  }}
  />
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.saveButton, styles.buttonMargin]} onPress={handleSaveLink}>
                  <Text style={[styles.buttonText, styles.saveButtonText]}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.saveButton, styles.marginBottom]} onPress={handleCancel}>
                  <Text style={[styles.buttonText, styles.saveButtonText]}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
    },

    linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,


  },
  link: {
    fontSize: 18,
    color: '#FF7E33',
    fontFamily: 'Fredoka',

  },
  linksHeader1: {
    fontSize: 20,
    fontFamily: 'Fredoka1',
    textAlign: 'center',
    marginTop: 20,
    color: '#FF7E33',
  },
  logo1: {
    width: 60,
    height: 60,
    marginBottom: 10,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#FF7E33',
    borderRadius: 5,
    paddingVertical: 10,
  },
  saveButtonText: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  buttonMargin: {
    marginBottom: 20,
  }, 
});
export default LinksSection