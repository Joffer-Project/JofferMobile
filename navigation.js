import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import AboutScreen from './screens/AboutScreen';
import FieldsScreen from './screens/FieldsScreen';
import TitlesScreen from './screens/TitlesScreen';
import PreviewScreen from './screens/PreviewScreen';
import ModifyAccount from './components/modAccount';
import HowItWorks from './components/howItWorks';
import Settings from './components/settings';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ModifyAccount" component={ModifyAccount} />
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