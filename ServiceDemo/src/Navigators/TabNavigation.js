import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../src/Profile';
import Booking from '../../src/Booking';
import Home from '../../src/Home';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'#8E3FFF'
    }}>
        <Tab.Screen name='Home' component={HomeNavigation} options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>Home</Text>
            ),
            tabBarIcon:({color,size})=>(
                <FontAwesome name="home" size={24} color={color} />
            )
        }}/>
        <Tab.Screen name='Booking' component={Booking} options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>Booking</Text>
            ),
            tabBarIcon:({color,size})=>(
                <FontAwesome name="bookmark" size={22} color={color} />
            )
        }}/>
        <Tab.Screen name='Profile' component={Profile} options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>Profile</Text>
            ),
            tabBarIcon:({color,size})=>(
                <FontAwesome name="user-circle" size={24} color={color} />
            )
        }}/>
    </Tab.Navigator>
  )
}

export default TabNavigation