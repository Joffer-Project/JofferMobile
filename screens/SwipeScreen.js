import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-deck-swiper';

const SwipeScreen = () => {
  const navigation = useNavigation();
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleSwipeLeft = () => {
    navigation.navigate('Swipe');
  };

  const handleSwipeRight = () => {
    navigation.navigate('Swipe');
  };

  const toggleExpand = (index) => {
    setExpandedIndex(prevIndex => prevIndex === index ? -1 : index);
  };

  const handleExpandButtonPress = (index) => {
    toggleExpand(index);
  };

  const renderCard = (company, index) => {
    const isExpanded = expandedIndex === index;
    console.log(index);

    return (
      <TouchableOpacity style={styles.card} onPress={() => toggleExpand(index)}>
        <Image source={company.image} style={styles.profileImage} />
        <Text style={styles.companyName}>{company.name}</Text>
        <Text style={styles.jobDetails}>{company.jobDetails}</Text>
        {isExpanded && (
          <View>
            <Text style={styles.expandedText}>
              About the Company:{'\n'}
              Nokia Corporation is a Finnish multinational telecommunications, information technology, and consumer electronics company,
              founded in 1865. Nokia's headquarters are in Espoo, Finland, in the greater Helsinki metropolitan area.
            </Text>
            <Text style={styles.expandedText}>
              Job Offering:{'\n'}
              Experience: 3-5 years {'\n'}
              Salary: $100,000 - $120,000 per year
              About the offer: päläpäläpäläpäläpäläpäläpäläpäläjgfhigjgijdsggkjdsjgdbj {'\n'}
            </Text>
          </View>
        )}
        {!isExpanded && (
          <TouchableOpacity style={styles.expandButton} onPress={() => handleExpandButtonPress(index)}>
            <Text style={styles.expandButtonText}>More Info</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  const companies = [
    {
      name: 'Nokia',
      image: require('../assets/kuva4.jpg'),
      jobDetails: 'Position: Software Engineer\nLocation: Oulu',
    },
    {
      name: 'IT',
      image: require('../assets/kuva4.jpg'),
      jobDetails: 'Position: Software Engineer\nLocation: Oulu',
    },
    {
      name: 'City Of Oulu',
      image: require('../assets/kuva4.jpg'),
      jobDetails: 'Position: Software Engineer\nLocation: Oulu',
    },
  ];

  return (
    <Swiper
      cards={companies}
      renderCard={(company, index) => renderCard(company, index)}
      onSwipedLeft={handleSwipeLeft}
      onSwipedRight={handleSwipeRight}
      cardIndex={0}
      backgroundColor={'#FAA16F'}
      stackSize={2}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  companyName: {
    fontFamily: 'Fredoka',
    fontSize: 26,
    color: '#FAA16F',
    marginBottom: 10,
    textAlign: 'center',
  },
  jobDetails: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  expandedText: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  expandButton: {
    marginTop: 10,
    backgroundColor: '#FAA16F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  expandButtonText: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default SwipeScreen;



