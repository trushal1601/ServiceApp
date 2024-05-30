import { View, Text, Image, FlatList } from "react-native";
import React from "react";

const getSlider = [
  {
    id: "clwrg3byt0cdr07o9f0eom3b6",
    name: "slider 1",
    uri: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwrg34s90cdl08o7rz59wlhb",
  },
  {
    id: "clwrg3zqu0cf907o9bbgd9fez",
    name: "slider 2",
    uri: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwrg3tnh0cet07o99gh0o52a",
  },
  {
    id: "clwrg3byt0cdr07o9f0eom3b9",
    name: "slider 3",
    uri: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwrg34s90cdl08o7rz59wlhb",
  },
];

const renderitem = ({ item }) => {
  return (
    <View style={{ marginTop: 10, marginLeft: 10 }}>
      <Image
        source={{ uri: item.uri }}
        style={{ width: 250, height: 130, borderRadius: 20 }}
      />
    </View>
  );   
};

const Slider = () => {
  return (
    <View>
      <View>
        <View style={{ marginTop: 10, marginLeft: 10 }}>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 18 }}>
            Offers For You
          </Text>
        </View>
        <FlatList
          horizontal
          data={getSlider}
          renderItem={renderitem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Slider;
