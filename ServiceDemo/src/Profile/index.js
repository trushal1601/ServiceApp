import { View, Text, Image, FlatList, TouchableOpacity,Linking } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useUser ,useClerk} from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const { user } = useUser();
  const { signOut } = useClerk(); 

  const profileMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home",
      action: () => {
        navigation.navigate('Home');
      },
    },
    {
      id: 2,
      name: "My Booking",
      icon: "bookmark-sharp",
      action: () => {
        navigation.navigate('Booking');
      },
    },
    {
      id: 3,
      name: "Contact Us",
      icon: "mail",
      action: onMessageBtnClick = () => {
        Linking.openURL('mailto:'+"trushal.prajapati1601@gmail.com"+"?subject=I Need Customer Service&body=Hi There,")
      }
    },
    {
      id: 4,
      name: "Logout",
      icon: "log-out",
      action: async () => {
        await signOut();
      },
    },
  ];
  
  return (
    <View>
      <View style={{ padding: 20, backgroundColor: "#8E3FFF" ,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
        <Text
          style={{ fontFamily: "outfit-medium", fontSize: 26, color: "white",marginTop:10 }}
        >
          Profile
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={{ uri: user.imageUrl }}
            style={{ height: 90, width: 90, borderRadius: 99 }}
          />
          <Text
            style={{
              fontSize: 26,
              marginTop: 8,
              fontFamily: "outfit-medium",
              color: "white",
            }}
          >
            {user.fullName}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginTop: 8,
              fontFamily: "outfit-medium",
              color: "white",
            }}
          >
            {user.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>
      <View style={{ paddingTop: 100 }}>
        <FlatList
          data={profileMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
                paddingHorizontal: 80,
              }}
              onPress={item.action}
           
              
            >
              <Ionicons name={item.icon} size={35} color="#8E3FFF" />
              <Text style={{ fontFamily: "outfit", fontSize: 20 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Profile;
