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
                'fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
            });
            setFontLoaded(true);
        };
        loadFont();
    }, []);

    if (!fontLoaded) {
        return null;
    }

    const handleNavigateBack = () => {
        navigation.goBack();
    };

    return (
        <LinearGradient colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/joffer2.png')} style={styles.logo} />
                <Text style={styles.headerText}>Let advanced Joffer algorithms find your ideal talent!</Text>
            </View>
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
                        <Image source={require('../assets/Superlike.png')} style={styles.customIcon} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.stepText1, { color: '#5496EE' }]}>Superlike</Text>
                            <Text style={styles.moreInfoText1}>
                            This feature is available for job seekers to express their high interest in specific job opportunities. Superlike matches can be found in a dedicated section labeled "Superlike Matches".
                            </Text>
                        </View>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image source={require('../assets/Role.png')} style={styles.customIcon} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.stepText1, { color: '#00367F' }]}>Select Role</Text>
                            <Text style={styles.moreInfoText1}>
                            This button is for you to view more specific matches based on the roles that you create. As detailed you will arrange the role settings as specific matches you will have. You can adjust roles from the settings. This feature is only available in the online version.
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.registerButton} onPress={handleNavigateBack}>
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
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 20,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 10,
    },
    headerText: {
        fontFamily: 'Fredoka',
        fontSize: 18,
        color: 'black',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        fontFamily: 'Fredoka1',
        minWidth: '95%', 
    },
    heading: {
        fontFamily: 'Fredoka1', 
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
        fontFamily: 'Fredoka1', 
        fontSize: 16,
        left: 20,
    },
    stepText1: {
        fontFamily: 'Fredoka1', 
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
        fontFamily: 'Fredoka1',
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
