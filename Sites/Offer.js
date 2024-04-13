import React, { useState, useEffect } from "react";
import { StyleSheet} from 'react-native';
import { View, Text, TextInput, Image} from "react-native";
import DatePicker from '@react-native-community/datetimepicker'
import * as Font from 'expo-font';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';


export default function Offer() {
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)
    const [mode, setMode] = useState('date') 
    const [givenTitle, setGivenTitle] = useState("")
    const [uploaded, setUploaded] = useState('')
    const navigation = useNavigation();
    const route = useRoute();
    const [titleBox, setTitleBox] = useState(route.params?.titleBox || []);



    useEffect(() => {
        async function loadFonts() {
          await Font.loadAsync({
            'Fredoka': require('../assets/Fredoka-VariableFont_wdth,wght.ttf'),
          });
        }
        loadFonts();
      }, []);
    

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
                    <Text style={styles.textOffer}>Add new job offer</Text>
                </View >
                <View>
                <LinearGradient
                    colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                    style={styles.Cardcontainer}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                                            >
                    <View style={styles.textTitle}>
                        <Text style={styles.Title}>Title</Text>
                    </View>
                    <View style={styles.textSalary}>
                        <Text style={styles.salary}>Salary</Text>
                    </View>
                    <View style={styles.Textcontainer}>
                        <TextInput
                            style={styles.input4}
                            placeholder="Example: Cypersecurity assistant"
                            value={givenTitle}
                            onChangeText={(text)=>setGivenTitle(text)}
                        // value={}
                        //onChangeText={}
                        ></TextInput>
                        <View style={styles.rowSalary}>
                         <TextInput
                                keyboardType="numeric"
                                style={styles.input1}
                            /*    placeholder="Text"
                                value={text}
                                onChangeText={(text)=>setText(text)} */
                            ></TextInput>
                             <TextInput
                                keyboardType="numeric"
                                style={styles.input1}
                            /*    placeholder="Text"
                                value={text}
                                onChangeText={(text)=>setText(text)} */
                            ></TextInput>
                        </View>
                           <View style={styles.input3}>
                                <TouchableOpacity onPress={() => showMode("date")}>
                                <LinearGradient
                                        colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                                        style={styles.DateButton}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}>
                                        <Text style={styles.dateButtonText}>Choose date</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                 
                                {show && (
                                    <DatePicker
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    onChange={onChange}
                                ></DatePicker>
                             )}
                             
                              <Text style={styles.LocaleText}>{date.toLocaleString()}</Text>
                             
                            </View>
                        <TextInput
                            style={styles.input2}
                            placeholder="Write something about the job offer"
                        ></TextInput>
                    </View>
                    <View>
                    <LinearGradient
                            colors={['rgba(84, 150, 238, 1)', 'rgba(0, 99, 230, 1)']}
                            style={styles.DoneButtonContainer}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}>
                <TouchableOpacity
                onPress = {upload}
                style={styles.DoneButton}
                title="upload"
                >
                <Text style={styles.Textcontainer}>+</Text>
                </TouchableOpacity>
                </LinearGradient>
                </View> 
                </LinearGradient>
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
        backgroundColor: '#fff',
        
    },
    Cardcontainer: {
        width: 350,
        height: 575,
        borderWidth: 2,
        borderBottomRightRadius: 40,
        alignItems: 'center',
        backgroundColor: '#0C6BE8',
        borderColor: "#fff",
    },
    input1: {
        top: 90,
        width: 148,
        height: 40,
        backgroundColor: 50,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#fff',
        paddingTop: 5,
        paddingLeft: 5,
        textAlignVertical: 'center',
    },
    DateButton: {
        width: 300,
        height: 40,
        borderRadius: 10, 
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },
    input3: {
        top: 100,
        width: 150,
        height: 32,
    },
    dateButtonText: {
        fontFamily: 'Fredoka',
        fontWeight: '600',
        fontSize: 18,
        color: 'white',
    },
    Textcontainer: {
        fontSize: 24,
        color: "white"
    },
    input2: {
        top: 130,
        width: 300,
        height: 280,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: '#fff',
        borderWidth: 3,
        textAlign: 'left', 
        textAlignVertical: 'top',
        padding: 5,
    },
    input4: {
        position:'absolute',
        top: 10,
        width: 300,
        height: 40,
        backgroundColor: 50,
        borderRadius: 10,
        textAlign: 'left',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#fff',
        paddingTop: 0,
        paddingLeft: 5,
        textAlignVertical: 'center',
    },
    logoImage: {
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textTitle: {
        width: 90,
        height: 30,
        top: 30,
        right: 105,
        
    },
    Title: {
        fontSize: 24,
        fontFamily: 'Fredoka',
        color: '#fff'
    },
    textSalary: {
        width: 80,
        height: 30,
        top: 90,
        right: 110,
        marginBottom: 5,
    },
    salary: {
        fontSize: 20,
        fontSize: 24,
        fontFamily: 'Fredoka',
        color: '#fff'
    },
    rowSalary: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    DoneButtonContainer: {
        width: 150,
        height: 37,
        backgroundColor: "#0C6BE8",
        borderWidth: 1,
        borderColor: "#fff",
        left: 98,
        top: 118,
        alignItems: 'center',
        justifyContent: 'center',
    },
    DoneText: {
        fontSize: 20,
        fontWeight: "600",
        color: "#000",
        fontFamily: 'Fredoka',
    },
    LocaleText: {
        color: '#fff'
    },
    textOffer: {
        fontSize: 18,
        fontWeight: '600',
        color: "black",
        fontFamily: 'fredoka'
    }
})