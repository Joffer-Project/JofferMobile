import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text, Dimensions, ScrollView} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Offer from "./Offer";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native'


export default function AddApplication() {
  const navigation = useNavigation();
  const route = useRoute();
  const screenWidth = Dimensions.get('window').width;
  const titles  = route.params?.titleBox || [];
  
  useEffect(() => {
    if (route.params?.givenTitle) {
      //  const newTitle = route.params.givenTitle;
        //setTitleBox(prevTitles => [...prevTitles, newTitle]);
    }
}, [route.params?.givenTitle]);

  return (
    <View style={styles.container}>
      <View style={styles.blueContainer}>
        <View style={styles.logoImage}>
          <Image source={require('../img/Joffer-Logobig.png')} />
        </View >
      </View>
      <View style={styles.ScrollContainer}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.jobOffers}>
                    {titles.map((title, index) => (
                        <View key={index} style={styles.titleBox}>
                            <Text style={styles.textForTitle}>{title}</Text>
                        </View>
                    ))}
                </View>
        </ScrollView>
      </View>
      <View style={styles.addContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('offer')} style={styles.addApplication}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
      <View style={styles.BottomButtonsContainer}>
        <TouchableOpacity /* onPress={} */ >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('../img/add.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity /* onPress={} */ >
          <View style={styles.BottomButton}>
            <Image style={styles.userImage} source={require('../img/userAvatar.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity /* onPress={} */ >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('../img/SwipeLogo.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity /* onPress={} */ >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('../img/setting.png')} />
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
    backgroundColor: '#0C6BE8',
    width: 400,
    height: 200,
    alignItems: 'center',

  },
  logoImage: {
    top: 15
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
    borderColor: 'black',
    borderWidth: 2,
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
    top: 100,
    position: "absolute",
    backgroundColor: "#0000",
    width: 'screenWidth',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    top: 100,
    position: "absolute",
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
    marginTop: 20,
    width: 300,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  }
})