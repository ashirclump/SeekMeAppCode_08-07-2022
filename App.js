import { Text, View } from 'react-native'
import React, { Component } from 'react'
// import {NavigationContainer} from ''

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

// import RegisterFirst from './RegisterFirst';
// import RegisterSecond from './RegisterSecond';
// import RegisterBank from './RegisterBank';
import Registeradhaar from './Registeradhaar';
import Pan from './Pan';


const Stack = createNativeStackNavigator()
export default function App() {
  render() 
    return (   
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Registeradhaar" component={Registeradhaar} />

          <Stack.Screen  name="Pan" component={Pan} />
          
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>

    );
  
}
