import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faTimesCircle, faCircleQuestion, faGear } from '@fortawesome/free-solid-svg-icons';
import UserInfo from '../Components/UserInfo.js';
import { useSwipeContext } from '../Components/ItsMatch.js'
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';



const CompanySwipe = () => {
  const navigation = useNavigation();
  const swiperRef = useRef(null);
  const { addUserSwipe, companySwipes } = useSwipeContext();
  const [users, setUsers] = useState([
    {
      name: 'Test name',
      image: require('./img/man.png'), //nokia
      jobDetails: 'Coder ● Data Engineer ● Plain Awesome\n',
    },
    {
      name: 'Kalle Siili',
      image: require('./img/Joffer-Logobig.png'), //IT
      jobDetails: 'Service Coordinator\n',
    },
    {
      name: 'Mario',
      image: require('./img/Joffer-Logobig.png'), //City of oulu
      jobDetails: 'Project coordinator\n',
    },
  ]);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'fredoka': require('../assets/Fredoka-VariableFont_wdth,wght.ttf'),
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);
    
  const handleSwipedRight = (index) => {
    addUserSwipe(users[index].name);
    console.log(`Swiped right on card ${index}`);
  };


  const renderSwiper = () => {
    return (
      <Swiper
        ref={swiperRef}
        cards={users}
        renderCard={(user, index) => <UserInfo user={user} />}
        backgroundColor={'transparent'} 
        stackSize={2}
        verticalSwipe={false}
        containerStyle={styles.swiperContainer} 
        onSwipedRight={handleSwipedRight} 
      />
    );
  };

  const handleNextCard = () => {
    if(swiperRef.current) {
      swiperRef.current.swipeLeft();
    }
  };

  const handleLoveCard = () => {
    if(swiperRef.current) {
      swiperRef.current.swipeRight();
    }
  };

  return (
    <View style={styles.container}>
        <View>
        <LinearGradient
            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
            style={styles.logoContainer}>
          <Image
            source={require('./img/Joffer-Logobig.png')} 
            style={styles.logo}
          />
          </LinearGradient>
        </View>
        {renderSwiper()}
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={handleNextCard}>
            <FontAwesomeIcon icon={faTimesCircle} size={60} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* Handle press */ }}>
            <Image source={require('./img/Joffer-Logobig.png')} style={styles.customIcon} /> 
          </TouchableOpacity>
          <TouchableOpacity onPress={ handleLoveCard }>
            <FontAwesomeIcon icon={faHeart} size={60} style={[styles.icon, { color: '#58D336' }]} />
          </TouchableOpacity>
        </View>

        <View style={styles.BottomButtonsContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate("AddApplication")} >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/add.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity /* onPress={} */ >
          <View style={styles.BottomButton}>
            <Image style={styles.userImage} source={require('./img/userAvatar.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("CompanySwipe")} >
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/SwipeLogo.png')} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("CompanySettings")}>
          <View style={styles.BottomButton}>
            <Image style={styles.addImage} source={require('./img/setting.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#1771E9',
    padding: 0,
    marginBottom: 10,
    marginLeft: -20,
    marginRight: -20,
    height: 150,
  },
  logo: {
    resizeMode: 'contain',
    width: 150,
  },
  swiperContainer: {
    height: 400, 
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 430,
  },
  iconsContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
    
  },
  icon: {
    fontSize: 80,
    color: '#D9352D',
    
  },
  customIcon: {
    width: 60,  
    height: 60, 
    resizeMode: 'contain', 
  },
  BottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    position: 'absolute',
    width: 'screenWidth',
    height: 90,
    width: "100%",
  },
  BottomButton: {
    width: 92,
    height: 90,
    borderTopWidth: 3,
    borderRadius: 10,
    borderLeftWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#1771E9',
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
});

export default CompanySwipe;