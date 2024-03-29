import React, { useState, useEffect } from "react";
import { StyleSheet} from 'react-native';
import { View, Text, TextInput, Image, Button} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker'
import * as Font from 'expo-font';
import AddApplication from "./AddApplication";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native'
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Offer() {
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)
    const [mode, setMode] = useState('date') 
    const [givenTitle, setGivenTitle] = useState("")
    const [uploaded, setUploaded] = useState('')
    const navigation = useNavigation();
    const route = useRoute();
    const [titleBox, setTitleBox] = useState(route.params?.titleBox || []);

    /*
    const HandleAddPress = () => {
    navigation.navigate('offer');
    }


   /* useEffect(() => {
        async function loadFonts() {
          await Font.loadAsync({
            'Fredoka': require('.../assets/Fredoka-VariableFont_wdth,wght.ttf'),
          });
        }
        loadFonts();
      }, []);
    */

      const upload = () => {
        if (givenTitle.trim() !== "") {
          setTitleBox(prevTitles => {
            const updatedTitles = [...prevTitles, givenTitle.trim()];
            console.log("New title added:", givenTitle.trim());
            return updatedTitles;
          });
          setGivenTitle(""); // Clear input after adding
        }
        navigation.navigate("AddApplication", { titleBox });
      };

    const onChange = (e, selectedDate) => {
        setDate(selectedDate)
        setShow(false)
    };

    const showMode = (modeToShow) => {
        setShow(true)
        setMode(modeToShow)
    }

    /*const handleTitleChange = (text) => {
        setTitle(text);
      };*/

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.logoImage}>
                    <Image source={require('./img/JofferLogo.png')} />
                </View >
                <View style={styles.Cardcontainer}>
                    <View style={styles.textTitle}>
                        <Text style={styles.Title}>Title</Text>
                    </View>
                    <View style={styles.textSalary}>
                        <Text style={styles.salary}>Salary</Text>
                    </View>
                    <View style={styles.Textcontainer}>
                        <View style={styles.salDatContainer}>
                            <TextInput
                                keyboardType="numeric"
                                style={styles.input1}
                               /* placeholder="Text"
                                value={text}
                                onChangeText={(text)=>setText(text)} */
                            ></TextInput>
                            <View style={styles.input3}>
                                <Button title="Starting date" style={styles.buttonText} onPress={() => showMode("date")} />
                                {show && (
                                    <DateTimePicker
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    onChange={onChange}
                                ></DateTimePicker>
                             )}
                              <Text>{date.toLocaleString()}</Text>
                            </View>
                        </View>
                        <TextInput
                            style={styles.input4}
                            placeholder="Title"
                            value={givenTitle}
                            onChangeText={(text)=>setGivenTitle(text)}
                        // value={}
                        //onChangeText={}
                        ></TextInput>
                        <TextInput
                            style={styles.input2}
                        ></TextInput>
                    </View>
                    <View style={styles.DoneButtonContainer}>
                <TouchableOpacity
                onPress = {upload}
                style={styles.DoneButton}
                title="upload"
                >
                <Text style={styles.Textcontainer}>Add</Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0C6BE8',
    },
    Cardcontainer: {
        width: 350,
        height: 575,
        borderWidth: 2,
        borderBottomRightRadius: 40,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: "#fff",
    },
    salDatContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input1: {
        top: 95,
        width: 148,
        height: 30,
        backgroundColor: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#fff",
        shadowColor: "#fff",
    },
    input3: {
        top: 95,
        width: 148,
        height: 30,
        backgroundColor: 50,
    },
    Textcontainer: {
        fontSize: 24,
        color: "white"
    },
    input2: {
        top: 90,
        width: 300,
        height: 350,
        backgroundColor: 50,
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: "#fff",
        borderColor: "#fff",
        
    },
    input4: {
        top: 0,
        width: 300,
        height: 30,
        backgroundColor: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#fff",
        textAlignVertical: 'top',
        textAlign: 'left' 
    },
    logoImage: {
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        width: 80,
        height: 30,
        top: 45,
        right: 105,
    },
    Title: {
        fontSize: 24,
       // fontFamily: 'Fredoka',
    },
    textSalary: {
        width: 70,
        height: 30,
        top: 95,
        right: 110,
    },
    salary: {
        fontSize: 20,
    },
    DoneButtonContainer: {
        width: 80,
        height: 70,
        borderRadius: 40,
        backgroundColor: "#0C6BE8",
        borderWidth: 1,
        borderColor: "#fff",
        left: 140,
        top: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    DoneText: {
        fontSize: 20,
        fontWeight: "600",
        color: "#000"
    }
})