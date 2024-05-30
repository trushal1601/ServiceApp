import { StyleSheet, Text, View ,Image, Pressable,TouchableOpacity} from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
const Login = () => {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
    
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
  return (
    <View style={{alignItems:"center"}}>
     <Image source={require('./../../asset/images/login.png')} style={styles.loginImage} />
    <View style={styles.subContainer}>
        <Text style={{fontSize:25,color:'#ffffff',textAlign:"center"}}>
            Let's Find <Text style={{fontWeight:"bold"}}> Professional Cleaning and Repair </Text>Service
        </Text>
        <Text style={{fontSize:15,color:"#ffffff",textAlign:"center",marginTop:20}}>Best App to find services near you which is deliver you a professional services</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{textAlign:"center",fontSize:15,color:"#8E3FFF"}}>
                Let's Get Started
            </Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    loginImage:{
        width:230,
        height:450,
        borderWidth:4,
        borderColor:"#000",
        marginTop:70,
        borderRadius:15
    },
    subContainer:{
        width:'100%',
        height:'70%',
        backgroundColor:'#8E3FFF',
        marginTop:-20,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        padding:20
    },
    button:{
        padding:15,
        backgroundColor:"#ffffff",
        borderRadius:99,
        marginTop:40
    }
})