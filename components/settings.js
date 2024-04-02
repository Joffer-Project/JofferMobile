import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

const Settings = () => {
    const navigation = useNavigation();
    const [fontLoaded, setFontLoaded] = React.useState(false);
    React.useEffect(() => {
        const loadFont = async () => {
            await Font.loadAsync({
                'fredoka': require('../assets/fonts/Fredoka-VariableFont_wdth,wght.ttf'),
                'fredoka1': require('../assets/fonts/Fredoka-Regular.ttf'),
            });
            setFontLoaded(true);
        };
        loadFont();
    }, []);

    const handleNavigateBack = () => {
        navigation.goBack();
    };
    const navigateToMatches = () => {
        navigation.navigate('Matches');
    };

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

                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleNavigateBack}>
                        <LinearGradient
                            colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.registerText}>User Information</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.settingsButton, { width: itemWidth }]}
                        onPress={navigateToMatches}
                    >
                        <LinearGradient
                            colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.registerText}>Matches</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleNavigateBack}>
                        <LinearGradient
                            colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.registerText}>Roles</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleNavigateBack}>
                        <LinearGradient
                            colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.registerText}>Images and Links</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleNavigateBack}>
                        <LinearGradient
                            colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.registerText}>About you</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.settingsButton, { width: itemWidth }]} onPress={handleNavigateBack}>
                        <LinearGradient
                            colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
                            style={styles.linearGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={styles.registerText}>Salary Range</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.registerButton, { width: itemWidth }]} onPress={handleNavigateBack}>
                    <LinearGradient
                        colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
                        style={styles.linearGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={styles.registerText}>Return</Text>
                    </LinearGradient>
                </TouchableOpacity>
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
        backgroundColor: '#FF7E33',
        padding: 20,
        marginBottom: 20,
        marginLeft: -20,
        marginRight: -20,

    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 10,
        marginTop: 20,
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
        height: 100,
    },
    registerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 10,
        height: 40,
        marginTop: 30,
        left: 95,
    },
    registerText: {
        fontFamily: 'Fredoka1',
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

export default Settings;
