import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const getData = [
  {
    id: "clwst59ej0l8307pnuin5tc3j",
    name: "HouseCleaning",
    email: "house123@gmail.com",
    contactPerson: "9581234874",
    category: {
      name: "Cleaning",
    },
    address: "144/kh ,Opp. NewYork Tower , Bodakdev ",
    about: "We are eager to clean your house , office , terrace .",
    images: {
      url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwssyth80l4w07pn70ccl604",
    },
  },
  {
    id: "clwst9x9m0lfy07o6wpnuzbbk",
    name: "Reapiring",
    email: "office123@gmail.com",
    contactPerson: "9541364501",
    category: {
      name: "Repairing",
    },
    address: "144/kh , opp. new York tower , Bodakdev",
    about: "We are eager to clean your house , office.",
    images: {
      url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwst6ewj0leq07o6av3an3ef",
    },
  },
  {
    id: "clwsteb3r0lj507o64zkz4u9k",
    name: "Painting",
    email: "car123@gmail.com",
    contactPerson: "8541203698",
    category: {
      name: "Painting",
    },
    address: "144/kh , opp. New York Tower , Bodakdev.",
    about: "We are eager to clean your car , clothes and crockery",
    images: {
      url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwstca0q0lcw07pn2hte6q3i",
    },
  },
  {
    id: "clwsteb3r0lj507o64zkz4u0k",
    name: "Shiping",
    email: "car123@gmail.com",
    contactPerson: "8541203698",
    category: {
      name: "Shiping",
    },
    address: "144/kh , opp. New York Tower , Bodakdev.",
    about: "We are eager to clean your car , clothes and crockery",
    images: {
      url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwstca0q0lcw07pn2hte6q3i",
    },
  },
];

const renderData = ({ item }) => {
  // console.log("afsasc",item.name);

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        backgroundColor: "white",
        borderRadius: 15,
        marginBottom: 15,
        flexDirection: "row",
        gap: 10,
        marginTop:10
      }}
      onPress={() => navigation.push("BusinessDetail")}
    >
      <Image
        source={{ uri: item.images.url }}
        style={{ height: 100, width: 100, borderRadius: 15 }}
      />
      <View style={{ gap: 3, display: "flex" }}>
        <Text style={{ fontFamily: "outfit", color: "gray", fontSize: 15 }}>
          {item.contactPerson}
        </Text>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 19 }}>
          {item.name}
        </Text>
        <Text
          style={{
            width: 210,
            fontFamily: "outfit",
            color: "gray",
            fontSize: 16,
          }}
        >
          <Entypo name="location-pin" size={20} color="#8E3FFF" />
          {item.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const BusinessListByCategory = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;
  // console.log("fsefooooooooooolll", data.data);
  return (
    <View style={{ padding: 10, paddingTop: 20,marginTop:20 }}>
      <View style={{flexDirection:"row",gap:10}}>
      <TouchableOpacity
        style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
          {data.name}
        </Text>
        </View>
      {data.data ? (
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={data.data}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: "white",
                  borderRadius: 15,
                  marginBottom: 15,
                  flexDirection: "row",
                  gap: 10,
                }}
                onPress={() =>
                  navigation.push("BusinessDetailScreen", { data: item })
                }
              >
                <Image
                  source={{ uri: item.images.url }}
                  style={{ height: 100, width: 100, borderRadius: 15 }}
                />
                <View style={{ gap: 3, display: "flex" }}>
                  <Text
                    style={{
                      fontFamily: "outfit",
                      color: "gray",
                      fontSize: 15,
                    }}
                  >
                    {item.contactPerson}
                  </Text>
                  <Text style={{ fontFamily: "outfit-bold", fontSize: 19 }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      width: 210,
                      fontFamily: "outfit",
                      color: "gray",
                      fontSize: 16,
                    }}
                  >
                    <Entypo name="location-pin" size={20} color="#8E3FFF" />
                    {item.address}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <Text
          style={{
            fontFamily: "outfit-medium",
            textAlign: "center",
            marginTop: "90%",
            fontSize: 19,
          }}
        >
          Not Any Service At A Time
        </Text>
      )}
    </View>
  );
};

export default BusinessListByCategory;
