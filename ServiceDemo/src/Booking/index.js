import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

const booking = [
  {
    images: {
      url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwssyth80l4w07pn70ccl604",
    },
    name: "John Doe",
    category: "House Repairing",
    status: "Booked",
    date: "01 June 2024 at 11:30 AM",
  },
  {
    images: {
      url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwst6ewj0leq07o6av3an3ef",
    },
    name: "Emma Potter",
    category: "Washing Clothes",
    status: "Completed",
    date: "02 June 2024 at 12:00 PM",
  },
  {
    images: {
      url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwstca0q0lcw07pn2hte6q3i",
    },
    name: "Harry Will",
    category: "House Cleaning",
    status: "Booked",
    date: "03 July 2024 at 08:30 PM",
  },
];
const Booking = () => {
  // console.log("sahjsa",item.images.url)
  return (
    <View style={{ padding: 10,marginTop:20 }}>
      <Text style={{ fontFamily: "outfit-medium", fontSize: 26 }}>
        My Bookings
      </Text>
      <View style={{ marginTop: 20,display:'flex' }}>
        <FlatList
          data={booking}
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
                  {item.name}
                </Text>
                <Text style={{ fontFamily: "outfit-bold", fontSize: 19 }}>
                  {item.category}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "outfit",
                    padding: 3,
                    color: "#8E3FFF",
                    backgroundColor: "#f1d4fa",
                    borderRadius: 3,
                    alignSelf: "flex-start",
                    paddingHorizontal: 7,
                  }}
                >
                  {item.status}
                </Text>
                <Text style={{fontFamily: "outfit",
            color: "gray",
            fontSize: 15,}}><AntDesign name="calendar" size={20} color="#8E3FFF" />{item.date}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Booking;
