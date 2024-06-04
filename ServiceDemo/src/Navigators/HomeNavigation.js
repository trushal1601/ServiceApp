import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import BusinessListByCategory from '../BusinessListByCategory/BusinessListByCategory';
import BusinessDetail from '../BusinessListByCategory/BusinessDetail';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
   <Stack.Navigator screenOptions={{
    headerShown:false
   }}>
    <Stack.Screen name='home' component={Home}/>
    <Stack.Screen name='BusinessListByCategory' component={BusinessListByCategory}/>
    <Stack.Screen name='BusinessDetailScreen' component={BusinessDetail}/>
   </Stack.Navigator>
  )
}

export default HomeNavigation