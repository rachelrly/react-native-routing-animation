import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Screen from './components/Screen'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Screen} />
        <Stack.Screen name='AfterHome' component={Screen} />
        <Stack.Screen name='Next' component={Screen} />
        <Stack.Screen name='AfterNext' component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


