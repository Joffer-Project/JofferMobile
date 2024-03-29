import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

import * as React from 'react';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import AboutScreen from './screens/AboutScreen';
import FieldsScreen from './screens/FieldsScreen';
import TitlesScreen from './screens/TitlesScreen';
import SwipeScreen from './screens/SwipeScreen';
import CompChoose from './screens/CompChoose';
import Owner from './screens/Owner';

export default function Navigation (){
    return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Choose" component={CompChoose} />
    <Stack.Screen name="Owner" component={Owner} />
    <Stack.Screen name="Fields" component={FieldsScreen} />
    <Stack.Screen name="Titles" component={TitlesScreen} />
    <Stack.Screen name="About" component={AboutScreen} />
    <Stack.Screen name="Swipe" component={SwipeScreen} />

    </Stack.Navigator>
    </NavigationContainer>
    
    
    )}
