import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

import * as React from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterScreen2 from './screens/RegisterScreen2';
import FieldsScreen from './screens/FieldsScreen';
import TitlesScreen from './screens/TitlesScreen';
import SocialsScreen from './screens/SocialsScreen';
import ProfilePreview from './screens/PreviewScreen';

export default function Navigation (){
    return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Register2" component={RegisterScreen2} />
    <Stack.Screen name="Fields" component={FieldsScreen} />
    <Stack.Screen name="Titles" component={TitlesScreen} />
    <Stack.Screen name="Socials" component={SocialsScreen} />
    <Stack.Screen name="Preview" component={ProfilePreview} />
    
    </Stack.Navigator>
    </NavigationContainer>
    
    
    )}
