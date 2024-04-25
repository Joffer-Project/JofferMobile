import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SwipeButton from 'rn-swipe-button';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { useTheme } from '../../context/ThemeContext';


const ProfileModify = ({ route }) => {
    //const { userId, name, email } = route.params;
    //console.log(userId);
    const navigation = useNavigation();
    const { theme } = useTheme();
    const [newname, setNewName] = useState('');
    const [newemail, setNewEmail] = useState('');
    const [password, setPassword] = useState('Change password');
    const [aboutMe, setAboutMe] = useState("I'm a software engineer passionate about building mobile applications. I love hiking, reading, and being awesome in my free time.");
    const [salaryMin, setSalaryMin] = useState('');
    const [auth0Id, setAuth0Id] = useState('');

    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');
    const [link3, setLink3] = useState('');
    const [link4, setLink4] = useState('');
    const [link5, setLink5] = useState('');
    const [profileImageUri, setProfileImageUri] = useState(null);
    const [userAccountId, setUserAccountId] = useState('');

    const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikl2eHBMemJuLV85R3pKdWxhcXFfcSJ9.eyJodHRwOi8vd3d3LmpvZmZlci5jb20vcm9sZXMiOltdLCJpc3MiOiJodHRwczovL2Rldi0zbGVieHVsd2prcGtzZWhuLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2NjI4ZjRmOGZjNDM2N2E3MzIxNjg5YTEiLCJhdWQiOlsiaHR0cHM6Ly9qb2ZmZXIuY29tL2FwaSIsImh0dHBzOi8vZGV2LTNsZWJ4dWx3amtwa3NlaG4udXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTcxMzk2MDE4NywiZXhwIjoxNzE0MDQ2NTg3LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXpwIjoiUzZ2MDRoRElsMlZaNlZFbEthdVl2UHFPVE5BR1FQN0EiLCJwZXJtaXNzaW9ucyI6W119.DHOeOvbMDzIhZni6uBm7q5h6H4ma9LTGRvN_s7KbVumc0RO9wkyI6HEwSMBSsBFkckCKEwkz01FsTlbo6Vb8SOnjmTDvpe0MQx_7Mr2ZuVQHYbiaWPBdGYT-xudSv7FV8LjzSLHt2zKnrX_KPdhVnP0g-mkde9DW0GZM0I55XiEBKHNWFRoAa6ecVi7fLLRh9k0PPo3SnT8-doCa7T9WXl_cEXrieKlBhraw6K64lEbftuINXwNrr_cHf2wGUgVa9OJthbXiwsYYWM5nJU70TFIoN_HtrOXLf0G8sFT70z9tFvVY3v3xjQJalyDmymQi3TpgjqEBgz9KrnbNMLcRgQ';
    const talentToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ikl2eHBMemJuLV85R3pKdWxhcXFfcSJ9.eyJodHRwOi8vd3d3LmpvZmZlci5jb20vcm9sZXMiOltdLCJpc3MiOiJodHRwczovL2Rldi0zbGVieHVsd2prcGtzZWhuLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2NjI3NmE3Y2E0OWYzODZlNzNmOWQ2YjgiLCJhdWQiOiJodHRwczovL2pvZmZlci5jb20vYXBpIiwiaWF0IjoxNzEzOTYxODkxLCJleHAiOjE3MTM5NjkwOTEsInNjb3BlIjoiIiwiYXpwIjoiUzZ2MDRoRElsMlZaNlZFbEthdVl2UHFPVE5BR1FQN0EiLCJwZXJtaXNzaW9ucyI6W119.Yyw_3_wt5mRhSbmmXQIHuAxy7DgXngTHkCHof7i9CtyLPRZ93Oy7q1ecATvZIuUjOYV2GoLHsgWOrEzeK2UEdO1G0NmxPe6vrleKfvXa9njOdhZBkaWHh2-Bu-KBIAQDZ3O-gvGxNIbPdYTW4Q1f9dRGoYn_kucIpJiob82ImZj-bIFrOoxUBz4ksEm1THz9OZGqOdxBtT12wPLqmNMN6x_ZnWxAex5DpQ6ZIUrBtCcODghkHJsPx8JgFCNhi7AnikdldPPG0IHea1zhPKMOHkYQFaK8nRs2rDjdfD85_sTM5GHPMHT3XXMJLJLauMvUwwnpSx7G5a125ruL4dvdCg';
        useEffect(() => {
            const fetchUserData = async () => {
                try {
                    const config = {
                        headers: {
                            'Authorization': `Bearer ${talentToken}`
                        }
                    };

                    const response = await axios.get(`https://joffer-backend-latest.onrender.com/Talent`, config);
                    const userData = response.data;
                    console.log('userdata??',userData);
                    console.log('auth0id', userData.auth0Id);
                    if (userData) {
                        setAboutMe(userData.aboutMe);
                        setProfileImageUri(userData.avatarUrl);
                        setSalaryMin(userData.salaryMinimum);
                        setLink1(userData.gitHubUrl);
                        setLink2(userData.linkedInUrl);
                        setLink3(userData.mediumUrl);
                        setLink4(userData.dribbleUrl);
                        setLink5(userData.personalUrl);
                        setAuth0Id(userData.auth0Id);
                    } else {
                       console.log('not working');
                    }
                } catch (error) {
                    console.error('Error fetching user dataa:', error);
                }
            };
        
            fetchUserData();
        }, []);


    const handleNextPress = () => {

        navigation.navigate('Swipe');
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                };
    
                const response = await axios.get(`https://joffer-backend-latest.onrender.com/Account`, config);
                const userData1 = response.data;
                console.log('data', userData1);
                if (userData1) {
                    setNewName(userData1.name);
                    setNewEmail(userData1.email);

    
                   
                } else {
                   
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                Alert.alert('Error', 'An error occurred while fetching user data.');
            }
        };
    
        fetchUserData();
    }, [token, userAccountId]);
    useEffect(() => {
        console.log('salaryMin:', salaryMin);
    }, [salaryMin]);

    useEffect(() => {

        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission required', 'Please grant permission to access the media library to pick an image.');
            }
        })();
    }, []);

    const pickImage = async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
            console.log('Image picker result:', result);

            if (!result.cancelled) {
                setProfileImageUri(result.assets[0].uri);
                console.log('Image picked:', result.assets[0].uri);
            } else {
                console.log('Image selection cancelled.');
            }
        } catch (error) {
            console.error('Error picking image:', error);
            alert('Error picking image. Please try again.');
        }
    };
    const saveProfile = async () => {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${talentToken}`
                }
            };
    
            const userData = {
                aboutMe,
                salaryMinimum: salaryMin,
                gitHubUrl: link1,
                linkedInUrl: link2,
                mediumUrl: link3,
                dribbleUrl: link4,
                personalUrl: link5,
                auth0Id: auth0Id,
                
                
            };
    
            const response = await axios.put('https://joffer-backend-latest.onrender.com/Talent', userData, config);
            console.log('Profile saved successfully:', response.data);
            
        } catch (error) {
            if (error.response) {
               
                console.error('Request failed with status code:', error.response.status);
                console.log('Response data:', error.response.data);
                console.log('Response headers:', error.response.headers);
            } else if (error.request) {
              
                console.error('No response received:', error.request);
            } else {
              
                console.error('Error:', error.message);
            }
           
        }
    };
    return (
        <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme === 'dark' ? 'black' : 'white' }]}>
            <LinearGradient
                colors={['rgba(255, 126, 51, 1)', 'rgba(255, 94, 0, 1)']}
                style={styles.logoContainer}
            >
                <Image
                    source={require('../../assets/joffer2.png')}
                    style={styles.logo}
                />
                <Text style={styles.descriptionText}>Let advanced Joffer algorithms find your ideal career fit!</Text>
            </LinearGradient>
            <View style={styles.profileContainer}>
                <Text style={[styles.aboutHeaderText, { color: '#FF7E33', fontSize: 20, marginBottom: 20, fontFamily: 'Fredoka1' }]}>Edit your profile</Text>
                <TouchableOpacity onPress={pickImage}>
                    <Image source={profileImageUri ? { uri: profileImageUri } : require('../../assets/kuva1.jpg')} style={styles.profileImage} />


                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => setNewName('')}>
                        <FontAwesomeIcon icon={faEdit} size={25} style={[styles.icon, { color: theme === 'dark' ? '#FF7E33' : 'rgba(255, 126, 51, 1)' }]} />
                    </TouchableOpacity>
                    <TextInput
                        style={[styles.inputField, { color: theme === 'dark' ? '#FF7E33' : '#F98A4B' }]}
                        value={newname}
                        onChangeText={setNewName}
                        placeholder={newname}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => setNewEmail('')}>
                        <FontAwesomeIcon icon={faEdit} size={25} style={styles.icon} />
                    </TouchableOpacity>
                    <TextInput
                        style={[styles.inputField, { color: '#F98A4B', fontSize: 20 }]}
                        value={newemail}
                        onChangeText={setNewEmail}
                        placeholder="Enter your email"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => setPassword('')}>
                        <FontAwesomeIcon icon={faEdit} size={25} style={styles.icon} />
                    </TouchableOpacity>
                    <TextInput
                        style={[styles.inputField, { color: '#F98A4B', fontSize: 20 }]}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter your password"
                    />
                </View>
                <View style={styles.salaryContainer}>
                    <TouchableOpacity onPress={() => setSalaryMin('')}>
                        <FontAwesomeIcon icon={faEdit} size={25} style={[styles.icon, { right: 30, }]} />
                    </TouchableOpacity>
                    <Text style={[styles.aboutHeaderText, { color: '#FF7E33', fontSize: 20, marginBottom: -30, fontFamily: 'Fredoka1', right: 20 }]}>
                        Minimum requested salary: <Text style={{ color: 'black' }}> {'\n'}{salaryMin} euros/month{'\n'}</Text>
                    </Text>
                </View>
                <TextInput
                    style={[styles.inputField1, { marginTop: 20, fontSize: 18, fontFamily: 'Fredoka1', color: 'black' }]}
                    value={salaryMin}
                    onChangeText={setSalaryMin}
                    placeholder="Type in new salary minimum"
                />


            </View>
            <View style={styles.aboutContainer}>
                <TouchableOpacity onPress={() => setAboutMe('')}>
                    <FontAwesomeIcon icon={faEdit} size={30} style={[styles.icon, { marginTop: -10 }]} />
                </TouchableOpacity>
                <Text style={[styles.aboutHeaderText, { color: '#FF7E33', fontSize: 22, fontFamily: 'Fredoka1' }]}>About Me</Text>
                <TextInput
                    style={[styles.aboutText, { color: 'black', fontSize: 18, }]}
                    value={aboutMe}
                    onChangeText={setAboutMe}
                    multiline={true}
                    placeholder="Tell something about yourself"
                />

            </View>
            <View style={styles.linksContainer}>
  <Text style={[styles.linksHeader, { color: '#FF7E33', fontFamily: 'Fredoka1', fontSize: 18 }]}>Links and Socials</Text>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <TouchableOpacity onPress={() => setLink1('')}>
      <Image source={require('../../assets/Property 1=Default.png')} style={[styles.customIcon, { width: 50, height: 50 }]} />
    </TouchableOpacity>
    <TextInput
      style={[styles.linkText, { color: '#FF7E33', flex: 1, marginLeft: 10 }]}
      value={link1}
      onChangeText={setLink1}
      placeholder="Enter link 1"
    />
  </View>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <TouchableOpacity onPress={() => setLink2('')}>
      <Image source={require('../../assets/linked.png')} style={[styles.customIcon, { width: 50, height: 50 }]} />
    </TouchableOpacity>
    <TextInput
      style={[styles.linkText, { color: '#FF7E33', flex: 1, marginLeft: 10 }]}
      value={link2}
      onChangeText={setLink2}
      placeholder="Enter link 2"
    />
  </View>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <TouchableOpacity onPress={() => setLink3('')}>
      <Image source={require('../../assets/personal.png')} style={[styles.customIcon, { width: 50, height: 50 }]} />
    </TouchableOpacity>
    <TextInput
      style={[styles.linkText, { color: '#FF7E33', flex: 1, marginLeft: 10 }]}
      value={link3}
      onChangeText={setLink3}
      placeholder="Enter link 3"
    />
  </View>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <TouchableOpacity onPress={() => setLink4('')}>
      <Image source={require('../../assets/personal.png')} style={[styles.customIcon, { width: 50, height: 50 }]} />
    </TouchableOpacity>
    <TextInput
      style={[styles.linkText, { color: '#FF7E33', flex: 1, marginLeft: 10 }]}
      value={link4}
      onChangeText={setLink4}
      placeholder="Enter link 2"
    />
  </View>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <TouchableOpacity onPress={() => setLink5('')}>
      <Image source={require('../../assets/personal.png')} style={[styles.customIcon, { width: 50, height: 50 }]} />
    </TouchableOpacity>
    <TextInput
      style={[styles.linkText, { color: '#FF7E33', flex: 1, marginLeft: 10 }]}
      value={link5}
      onChangeText={setLink5}
      placeholder="Enter link 2"
    />
  </View>
</View>

            <SwipeButton
                title="    Save "
                onSwipeSuccess={saveProfile}
                railStyles={{
                    backgroundColor: 'rgba(255, 191, 129, 0.3)',
                    borderColor: '#FF7E33',
                    zIndex: 1,
                    elevation: 1,
                }}
                thumbIconBackgroundColor="#FF7E33"
                thumbIconImageSource={require('../../assets/right-arrow.png')}
                railBackgroundColor="#FFFFFF"
                thumbIconBorderColor="#FF7E33"
                thumbIconStyles={{ width: 30, height: 30 }}
                titleStyles={{ color: '#FF7E33', fontFamily: 'Fredoka1', fontSize: 18 }}
                containerStyles={{ marginTop: 20 }}
            />

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: -0,
        marginLeft: -20,
        marginRight: -20,
        height: 230,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 10,
        marginTop: 30,
    },
    descriptionText: {
        fontSize: 15,
        marginTop: 10,
        fontFamily: 'Fredoka',
        textAlign: 'center',
        padding: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20,
    },
    profileImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        shadowColor: '#FF7E33',
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },
    userName: {
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'Fredoka',
        width: 300,
    },
    professions: {
        fontSize: 16,
        marginTop: 5,
        textAlign: 'center',
        fontFamily: 'Fredoka',
        height: 50,
        width: 400,

        padding: 10,
    },
    aboutContainer: {
        marginTop: 20,
        alignItems: 'center',
        //borderWidth: 1,
        padding: 10,
    },
    aboutHeaderText: {
        fontSize: 18,
        marginBottom: 10,

        fontFamily: 'Fredoka',
    },
    aboutText: {
        fontFamily: 'Fredoka',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',

    },
    icon: {
        color: 'rgba(255, 126, 51, 1)',
        marginBottom: 10,
    },
    icon1: {
        color: 'rgba(255, 126, 51, 1)',
        //marginBottom: 10,
        marginTop: 10,
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
    gradient: {
        flex: 1,
        borderRadius: 10,
    },
    editIcon: {
        width: 20,
        height: 20,
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        height: 50,
    },
    inputField: {
        flex: 1,
        marginLeft: 10,

        borderWidth: 1,
        padding: 10,
        borderColor: '#F98A4B',
        fontSize: 18,
        fontFamily: 'Fredoka',
        borderRadius: 10,
    },
    inputField1: {
        flex: 1,
        marginLeft: 10,
        borderWidth: 1,
        padding: 10,
        borderColor: '#F98A4B',
        fontSize: 18,
        fontFamily: 'Fredoka',
        borderRadius: 10,

    },
    salaryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
});

export default ProfileModify;



