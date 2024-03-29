import * as React from 'react';
import { StyleSheet } from 'react-native';
import Start from "./Sites/Start.js";
// import RecCom from "./Sites/RecCom.js"; // Recruiter or company 
//import Owner from "./Sites/Owner.js"; 
import "react-native-gesture-handler";
//import CompChoose from "./Sites/CompChoose";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddApplication from "./Sites/AddApplication.js"
import Offer from './Sites/Offer.js';
import HomeScreen from './Sites/HomeScreen.js';
import LoginScreen from './Sites/LoginScreen.js';
import RegisterScreen from './Sites/RegisterScreen.js';
import FieldsScreen from './Sites/FieldsScreen.js';
import TitlesScreen from './Sites/TitlesScreen.js';
import SocialsScreen from './Sites/SocialsScreen.js';
import ProfilePreview from './Sites/PreviewScreen.js';
import SwipeScreen from './Sites/SwipeScreen.js';
import CompanyLog from './Sites/CompanyLog.js';
import CompanyRegister from './Sites/CompanyRegister.js';
import CompanyFields from './Sites/CompanyFields.js';
import CompanyTitles from './Sites/CompanyTitles.js';
import RegisterScreen2 from './Sites/RegisterScreen2.js';
import CompanyRegister2 from './Sites/CompanyRegister2.js';
import CompanySocials from './Sites/CompanySocials.js';
import CompanyPreview from './Sites/CompanyPreview.js';
import CompanySwipe from './Sites/CompanySwipe.js';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start"component={Start}/> 
      <Stack.Screen name="CompanyLog"component={CompanyLog}/>
      <Stack.Screen name="CompanyRegister"component={CompanyRegister}/>
      <Stack.Screen name="CompanyRegister2"component={CompanyRegister2}/>
      <Stack.Screen name="CompanyFields"component={CompanyFields}/>
      <Stack.Screen name="CompanyTitles"component={CompanyTitles}/>
      <Stack.Screen name="CompanySocials"component={CompanySocials}/>
      <Stack.Screen name="CompanyPreview"component={CompanyPreview}/>
      <Stack.Screen name="CompanySwipe"component={CompanySwipe}/>
      <Stack.Screen name="AddApplication" component={AddApplication} options={{ title: "upload",}}/> 
      <Stack.Screen name="offer" component={Offer} options={{title: "textDetails",}}/> 
      <Stack.Screen name="LoginScreen" component={LoginScreen}/> 
      <Stack.Screen name="RegisterScreen" component={RegisterScreen}/> 
      <Stack.Screen name="RegisterScreen2" component={RegisterScreen2}/> 
      <Stack.Screen name="FieldsScreen" component={FieldsScreen}/> 
      <Stack.Screen name="TitlesScreen" component={TitlesScreen}/> 
      <Stack.Screen name="SocialsScreen" component={SocialsScreen}/> 
      <Stack.Screen name="ProfilePreview" component={ProfilePreview}/> 
      <Stack.Screen name="SwipeScreen" component={SwipeScreen}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/*Stack.Screen  //Lisää tämä app.js return koodiin, jotta compchoose tulee näkyviin
   name="ChooseRole"
      component={CompChoose}
    />
    <Stack.Screen
      name="Owner"
      component={Owner}
    /> */