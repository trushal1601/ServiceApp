import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useUser } from "@clerk/clerk-expo";

const Header = () => {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View>
        <View style={styles.container}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image
                source={{ uri: user?.imageUrl }}
                style={{ height: 45, width: 45, borderRadius: 99 }}
              />
              <View>
                <Text style={{ color: "#ffffff", fontFamily: "outfit" }}>
                  Welcome,
                </Text>
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: 20,
                    fontFamily: "outfit-medium",
                  }}
                >
                  {user.fullName}
                </Text>
              </View>
            </View>
            <FontAwesome name="bookmark-o" size={27} color="white" />
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <TextInput placeholder="Search" style={styles.textInput} />
            <FontAwesome
              name="search"
              size={24}
              color="#8E3FFF"
              style={{
                backgroundColor: "#ffffff",
                padding: 10,
                borderRadius: 8,
              }}
            />
          </View>
        </View>
      </View>
    )
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#8E3FFF",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: "85%",
    backgroundColor: "#ffffff",
    fontSize: 16,
    fontFamily: "outfit",
  },
});
