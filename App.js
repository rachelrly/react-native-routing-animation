import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator, TransitionSpecs, HeaderStyleInterpolators} from '@react-navigation/stack'
import Screen from './components/Screen'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Screen} options={{title: 'Page 1'}}/>
        <Stack.Screen name='AfterHome' component={Screen} options={{next:'Page 2'}}/>
        <Stack.Screen name='Next' component={Screen} options={{next:'Page 3'}}/>
        <Stack.Screen name='AfterNext' component={Screen} options={{next:'Page 4'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


