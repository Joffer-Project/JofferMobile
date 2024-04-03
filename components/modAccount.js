import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

const ModAccount = () => {
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

    const handleNavigateTo = (screenName) => {
        navigation.navigate(screenName);
    };
    const handleNavigateBack = () => {
        navigation.goBack();
    };

    const handleSaveChanges = () => {
        // TÄHÄ API KUTSUA 
        navigation.goBack();
    };
    //const handleSaveChanges = () => { // KONTSA SAVE BUTTONIA VARTEN
        //alert('Changes saved!');

    if (!fontLoaded) {
        return null;
    }

    const windowWidth = Dimensions.get('window').width;
    const itemWidth = (windowWidth - 30) / 2;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/joffer2.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.headerText}>Let advanced Joffer algorithms find your ideal talent!</Text>
                </View>
                <Text style={styles.subHeaderText}>Customize account and applications below</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={() => handleNavigateTo('Preview')}>
                        <LinearGradient
                            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.registerText}>Company Information</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={() => handleNavigateTo('Fields')}>
                        <LinearGradient
                            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.registerText}>Fields</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={() => handleNavigateTo('Titles')}>
                        <LinearGradient
                            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.registerText}>Titles</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={() => handleNavigateTo('About')}>
                        <LinearGradient
                            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.registerText}>Images and Links</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={() => handleNavigateTo('About')}>
                        <LinearGradient
                            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.registerText}>About the company</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={() => handleNavigateTo('Applications')}>
                        <LinearGradient
                            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.registerText}>Modify Applications</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    </View>
                <TouchableOpacity style={[styles.registerButton, { width: itemWidth  }]} onPress={handleNavigateBack}>
                    <LinearGradient
                        colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                        style={styles.linearGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={styles.registerText}>Return</Text>
                    </LinearGradient>
                </TouchableOpacity>
               {/* KONTSAA SAVE BUTTONIA VARTEN <TouchableOpacity style={[styles.registerButton, { width: itemWidth  }]} onPress={handleSaveChanges}>
                    <LinearGradient
                        colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                        style={styles.linearGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={styles.registerText}>Save Changes</Text>
                    </LinearGradient>
                </TouchableOpacity> */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    scrollView: {
        flexGrow: 1,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 0,
        backgroundColor: '#0C6BE8',
        padding: 20,
        marginBottom: 20,
        marginLeft:-20,
        marginRight: -20,  
      },
      logo: {
        width: 120,
        height: 120,
        marginBottom: 10,
        marginTop: 20,
      },
      subHeaderText: {
        fontFamily: 'Fredoka1',
        fontSize: 20,
        color: '#0C6BE8',
        marginTop: 10,
        marginBottom: 30,
        textAlign: 'center',
        },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    settingsButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 20,
        height: 120,
    },
    registerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 20,
        height: 40,
        marginTop: 30,
        left: 110,
    },
    registerText: {
        fontFamily: 'Fredoka',
        fontSize: 18,
        color: 'white',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: '100%',
        width: '100%',
    },
});

export default ModAccount;
