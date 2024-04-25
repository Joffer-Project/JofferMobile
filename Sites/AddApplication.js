import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, Dimensions, ScrollView} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Offer from "./Offer";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font'; 



export default function AddApplication() {
  const navigation = useNavigation();
  const route = useRoute();
  const screenWidth = Dimensions.get('window').width;
  const { date, text, salaryMin, salaryMax, title } = route.params || {};
  const [jobOffers, setJobOffers] = useState([]);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Fredoka': require('../assets/Fredoka-VariableFont_wdth,wght.ttf'),
      });
    }
    loadFonts();
  }, []);

  useEffect(() => {
    const newOffer = route.params;
    if (newOffer) {
      setJobOffers(prevOffers => [...prevOffers, newOffer]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.logoImage}>
        <LinearGradient
            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
            style={styles.blueContainer}>
          <Image source={require('./img/Joffer-Logobig.png')} 
          style={styles.logo} />
          </LinearGradient>
        </View >
      </View>
      <View style={styles.ScrollContainer}>
        <ScrollView style={styles.scrollView}>
          {jobOffers.map((offer, index) => (
            <View key={index} style={styles.jobOffersContainer}>
          <View style={styles.jobOffers}>
              <View style={styles.infoContainer}>
                      <Text style={styles.titleText}>Title: </Text>
                      <Text style={styles.titleText2}>{offer.title}</Text>
                      <Text style={styles.dateText}>Date: </Text>
                      <Text style={styles.dateText2}>{offer.date}</Text>
                  </View>
                </View>
                </View>
            ))}
        </ScrollView>
      </View>
      <View style={styles.addContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('offer')} style={styles.addApplication}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
      <View style={styles.BottomButtonsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AddApplication')} >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/add.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CompanyModify')}>
          <View style={styles.BottomButton}>
            <Image style={styles.userImage} source={require('./img/userAvatar.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CompanySwipe')} >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/SwipeLogo.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CompanySettings")} >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/setting.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.checkContainer}>
        <TouchableOpacity
          //  onPress={}
          style={styles.ButtonCheck} >
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#ffff",
  },
  blueContainer: {
    marginTop: 0,
    width: 400,
    height: 180,
    alignItems: 'center',

  },
  logo: {
    resizeMode: 'contain',
    width: 150,
  },
  addContainer: {
    bottom: 50,
    width: 'screenWidth',
    height: 135,
    alignItems: 'center',
    position:"absolute",

  },
  addApplication: {
    backgroundColor: "#0000",
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    borderColor: '#0C6BE8',
    borderWidth: 3,
  },
  BottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    position: 'absolute',
    width: 'screenWidth',
    height: 90,
  },
  BottomButton: {
    width: 92,
    height: 90,
    borderTopWidth: 3,
    borderRadius: 10,
    borderLeftWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0C6BE8',
    backgroundColor: "#fff"
  },
  addImage: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  userImage: {
    resizeMode: 'contain',
    width: 60,
    height: 50,
  },
  addedNew: {
    width: 100,
    height: 40,
    backgroundColor: "#0000"
  },
  ScrollContainer: {
    marginTop: 20,
    backgroundColor: "#0000",
    width: 'screenWidth',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    top: 0,
    backgroundColor: "white",
    height: 350,
    width: 300,
  },
  titleBox: {
    color: "white"
  },
  textForTitle: {
    color: "white"
  },
  jobOffers: {
    flexDirection: 'column',
    padding: 0,
    marginTop: 0,
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    color: '#0C6BE8',
    fontWeight: '500'
  },
  infoContainer: {
    width: 300,
    height: 110,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    top: 20,
    backgroundColor: '#0C6BE8',
    justifyContent: 'center',  
    borderRadius: 30,  
},
titleText: {
  color: 'white',
  fontFamily: 'Fredoka',
  fontSize: 17,
  fontWeight: '700'
},
titleText2: {
  color: 'white',
  fontFamily: 'Fredoka',
  fontSize: 16,
},
dateText: {
  color: 'white',
  fontSize: 16,
  fontFamily: 'Fredoka',
  fontWeight: '700',
  marginLeft: 180,
},
dateText2: {
  color: 'white',
  fontSize: 15,
  marginLeft: 180,
  fontFamily: 'Fredoka',
}
})