import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; 

import * as Font from 'expo-font';

const HowItWorks = () => {
    const navigation = useNavigation();
    const [fontLoaded, setFontLoaded] = React.useState(false);
   React.useEffect(() => {
        const loadFont = async () => {
            await Font.loadAsync({
                'fredoka': require('../assets/Fredoka-VariableFont_wdth,wght.ttf'),
            });
            setFontLoaded(true);
        };
        loadFont();
    }, []); 

    
    if (!fontLoaded) {
        return null;
    }

    return (
        <LinearGradient
            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
            style={styles.modal}>
         <View >
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.modalContent}>
                    <Text style={styles.heading}>So how it works..?</Text>
                    <View style={styles.iconContainer}>
                        <FontAwesomeIcon icon={faHeart} size={60} style={[styles.icon, { color: '#58D336' }]} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.stepText, { color: '#58D336' }]}>Like</Text>
                            <Text style={styles.moreInfoText}>This button allows you to express interest in a potential candidate. Tap this button if you'd like to learn more about the candidate, possibly conduct an interview, or consider them for a position. Matches with interested candidates will be highlighted in the "Latest Matches" panel.</Text>
                        </View>
                    </View>
                    <View style={styles.iconContainer}>
                        <FontAwesomeIcon icon={faTimesCircle} size={60} style={styles.icon} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.stepText, { color: '#D9352D' }]}>Dislike</Text>
                            <Text style={styles.moreInfoText}>This button allows you to pass on a candidate. If you're not interested in a particular candidate, tap this button to indicate that you don't wish to consider them further. Once marked as not interested, they won't be shown again.</Text>
                        </View>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image source={require('./img/Superlike.png')} style={styles.customIcon} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.stepText1, { color: '#5496EE' }]}>Superlike</Text>
                            <Text style={styles.moreInfoText1}>
                            This feature is available for job seekers to express their high interest in specific job opportunities. Superlike matches can be found in a dedicated section labeled "Superlike Matches".
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate("CompanySwipe")}>
                    <LinearGradient
                            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.registerText}>Let's try!</Text>
                        </LinearGradient>
            </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0C6BE8',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        paddingBottom: 120,
        paddingTop: 80,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        fontFamily: 'fredoka',
        minWidth: '95%', 
    },
    heading: {
       fontFamily: 'fredoka', 
        fontSize: 20,
        color: '#0C6BE8',
        marginBottom: 20,
        marginTop: 0,
        left: 85,
        
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        marginRight: 10,
        color: '#D9352D',
    },
    stepText: {
        fontFamily: 'fredoka', 
        fontSize: 16,
        left: 20,
    },
    stepText1: {
        fontFamily: 'fredoka', 
        fontSize: 16,
        right: -10,
        
    },
    moreInfoText: {
        fontFamily: 'fredoka',
        fontSize: 14,
        color: 'gray',
        marginLeft: 20,
        marginTop: 5,
        textAlign: 'left',
        marginRight: 20,
        marginBottom: 20,
    },
    moreInfoText1: {
        fontFamily: 'fredoka',
        fontSize: 14,
        color: 'gray',
        marginLeft: 20,
        right: 10,
        marginTop: 5,
        textAlign: 'left',
        marginRight: 20,
        marginBottom: 20,
    },
    registerButton: {
        alignItems: 'center',
        justifyContent: 'center', 
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#0C6BE8',
        borderRadius: 20,
        height: 40,
        width: 150,
        alignSelf: 'center',
    },
    registerText: {
        fontFamily: 'fredoka',
        fontSize: 18,
        color: 'white',
    },
    customIcon: {
        width: 80,  
        height: 80, 
        resizeMode: 'contain', 
        right: 10,
    },
    textContainer: {
        flex: 1,
        marginLeft: 20,
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: '100%',
        width: '100%',
    },
});

export default HowItWorks;