import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as Font from 'expo-font';

export default function CompChoose(){
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  const HandleOwnerPress = () => {
    navigation.navigate('Owner');
  }

    return (
        <View style={styles.container}>
            <View style={styles.blueContainer}>
          <View style={styles.logoImage}>
          <Image source={require('../assets/joffer2.png')}></Image>
          </View > 
          <View style={styles.ButtonContainer}>
          <View style={styles.WelContainer2}>
            <Text style={styles.Welcome2}>I register as a</Text>
          </View>
          <View style={styles.recruiterButton}>
             <TouchableOpacity /*onPress ={onPress}*/ style={styles.buttonEmployee}>
              <Text style={styles.text1}>Recruiter</Text>
             </TouchableOpacity>
          </View>
          <View style={styles.blueButton}>
             <TouchableOpacity onPress={HandleOwnerPress} style={styles.buttonCompany}>
              <Text style={styles.text1}>Owner</Text>
             </TouchableOpacity>
          </View>
          </View>
          </View>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
      },
      blueContainer: {
        backgroundColor: '#0C6BE8',
        width: 400,
        height: 200,
        alignItems: 'center'
      },
      text1: {
        color: '#ffff',
        fontSize: 20,
        fontWeight: 'bold'
      },
      recruiterButton: {
        top: 240,
      }, 

      blueButton: {
        top: 25,
      },

      buttonCompany: {
        backgroundColor: '#0C6BE8',
        fontSize: 20,
        borderRadius: 40,
        width: 200,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
      },

      buttonEmployee:{
        backgroundColor: '#0C6BE8',
        fontSize: 20,
        borderRadius: 40,
        width: 200,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logoImage: {
        top: 15
      },
      Welcome: {
        fontSize: 26,
        fontWeight: '500',
      }, 
      Welcome2: {
        fontSize: 22,
        fontWeight: '400',
      }, 
      WelContainer2: { 
        top: 50
      },
      ButtonContainer: {
        alignItems: 'center',
        top: 50,
      }
    });
