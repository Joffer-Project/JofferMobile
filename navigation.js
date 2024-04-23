import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import AboutScreen from './screens/AboutScreen';
import FieldsScreen from './screens/FieldsScreen';
import TitlesScreen from './screens/TitlesScreen';
import PreviewScreen from './screens/PreviewScreen';
import HowItWorks from './components/howItWorks';
import Settings from './screens/settings';
import FieldsScreenModify from './screens/settingsScreens/fieldsModify';
import TitlesScreenModify from './screens/settingsScreens/titlesModify';
import modAccount from './screens/modAccount';
import ProfileModify from './screens/settingsScreens/profileModify';
import Passcode from './screens/settingsScreens/passcode';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ModifyAccount" component={modAccount} />
        <Stack.Screen name="Passcode" component={Passcode} />
        <Stack.Screen name="FModify" component={FieldsScreenModify} />
        <Stack.Screen name="TModify" component={TitlesScreenModify} />
        <Stack.Screen name="ProfileModify" component={ProfileModify} />
        <Stack.Screen name="HowItWorks" component={HowItWorks} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Fields" component={FieldsScreen} />
        <Stack.Screen name="Titles" component={TitlesScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Preview" component={PreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;