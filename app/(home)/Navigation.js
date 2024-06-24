import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Employee from './Employee';
import Landing from './Landing';
import Adddetails from './Adddetails';

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown:false}} >
          <Stack.Screen name="Landing" component={Landing}  />
          <Stack.Screen name="Employee" component={Employee} />
          <Stack.Screen name="Adddetails" component={Adddetails} /> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation