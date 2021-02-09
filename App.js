import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Screen from './components/Screen'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Screen} options={{next:'AfterHome'}}/>
        <Stack.Screen name='AfterHome' component={Screen} options={{next:'Next'}}/>
        <Stack.Screen name='Next' component={Screen} options={{next:'AfterNext'}}/>
        <Stack.Screen name='AfterNext' component={Screen} options={{next:'Home'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


