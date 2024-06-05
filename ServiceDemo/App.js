import React from "react";
import {View, Text, Pressable,StatusBar} from "react-native"
import Login from "./src/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from "./src/Navigators/TabNavigation";
import { useFonts } from 'expo-font';


const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
const App = () => {
    const [fontsLoaded, fontError] = useFonts({
        'outfit': require('./asset/font/Outfit-Regular.ttf'),
        'outfit-medium': require('./asset/font/Outfit-Medium.ttf'),
        'outfit-bold': require('./asset/font/Outfit-Bold.ttf'),
      });
    return(
      
        <ClerkProvider 
        tokenCache={tokenCache}
        publishableKey="pk_test_YWJsZS1oaXBwby04MC5jbGVyay5hY2NvdW50cy5kZXYk">
         <StatusBar barStyle="auto" />
        <View style={{flex:1,backgroundColor:'#fff'}}>
           
           <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <Login/>
        </SignedOut>
        </View>
        </ClerkProvider>
    )
}

export default App;