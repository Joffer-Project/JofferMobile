import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfilePreview = ({ profileImage, links = [] }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileImage ? { uri: profileImage } : require('../assets/profilepic.png')} style={styles.profileImage} />
        <Text style={styles.descriptionText}>Profile Preview</Text>
      </View>
      <View style={styles.linksContainer}>
        <Text style={styles.linksHeader}>Links</Text>
        <View style={styles.linksList}>
          {links.map((link, index) => (
            <Text key={index} style={styles.linkText}>{link}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  descriptionText: {
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',  
    fontFamily: 'Fredoka',
  },
  linksContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  linksHeader: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Fredoka',
  },
  linksList: {
    alignItems: 'center',
  },
  linkText: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProfilePreview;
