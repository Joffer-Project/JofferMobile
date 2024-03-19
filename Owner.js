import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';


export default function Owner() {
    const [selectedImages, setSelectedImages] = useState([]);
    const [text, onChangeText] = React.useState('  Your fullname');
    const [email, onChangeEmail] = React.useState('  ');
    const [password, onChangePassword] = React.useState('  ');
    const [passwordTwo, onChangePasswordTwo] = React.useState('  ');

    const openImagePicker = () => {
        const options = {
            title: 'Select Images',
            mediaType: 'photo',
            maxWidth: 500,
            maxHeight: 500,
            quality: 0.8,
            storageOptions: {
                skipBackup: true,
            },
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const uri = response.uri;
                setSelectedImages(prevImages => [...prevImages, uri]);
            }
        });
    };


    return (
        <View style={styles.container}>
            <View style={styles.blueBackground}>
                <TouchableOpacity onPress={openImagePicker} style={styles.button}>
                    <Text style={styles.buttonText}>Add Profile image</Text>
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    {selectedImages.map((imageUri, index) => (
                        <Image key={index} source={{ uri: imageUri }} style={styles.image} />
                    ))}
                </View>
            </View>
            <View style={styles.TextContainer1}>
                <Text style={styles.fullnameText}>Fullname</Text>
            </View>
            <View style={styles.FullnameContainer}>
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    />
            </View>
            <View style={styles.TextContainer2}>
                <Text style={styles.fullnameText}>Email</Text>
            </View>
            <View style={styles.FullnameContainer}>
                <TextInput
                    onChangeText={onChangeEmail}
                    value={email}
                    />
            </View>
            <View style={styles.TextContainer3}>
                <Text style={styles.fullnameText}>Password</Text>
            </View>
            <View style={styles.FullnameContainer}>
                <TextInput
                    onChangeText={onChangePassword}
                    value={password}
                    />
            </View>
            <View style={styles.TextContainer4}>
                <Text style={styles.fullnameText}>Password again</Text>
            </View>
            <View style={styles.FullnameContainer}>
                <TextInput
                    onChangeText={onChangePasswordTwo}
                    value={passwordTwo}
                    />
            </View>
            <TouchableOpacity 
                /*onPress ={onPress}*/ style={styles.buttonNext}>
              <Text style={styles.fullnameText}>Next</Text>
             </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    TextContainer1: {
        margin: 10,
        top: 85,
        right: 55,
    },
    TextContainer2: {
        margin: 10,
        top: 85,
        right: 70,
    },
    TextContainer3: {
        margin: 10,
        top: 85,
        right: 55,
    },
    TextContainer4: {
        margin: 10,
        top: 85,
        right: 30,
    },
    fullnameText: {
        fontSize: 16,
        fontWeight: '600'
    },
    blueBackground:{
        width: 400,
        height: 200,
        backgroundColor: '#0C6BE8',
        alignItems: 'center',
    },
    FullnameContainer: {
        margin: 10,
        top: 70,
        borderWidth: 2,
        width: 200,
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
       /* shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: "#000000" */
    },
    button: {
        top: 100,
        backgroundColor: '#ffff',
        borderWidth: 2,
        fontSize: 20,
        borderRadius: 100,
        width: 170,
        height: 170,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonNext: {
        top: 80,
        left: 130,
        width: 70,
        height: 40,
        backgroundColor: "#0C6BE8",
        justifyContent: 'center',
        alignItems: 'center',
    }
});