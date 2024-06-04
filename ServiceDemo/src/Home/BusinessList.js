import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const businessLists = [
  {
    id: "clwst59ej0l8307pnuin5tc3j",
    name: "House Cleaning",
    email: "house123@gmail.com",
    contactPerson: "Jenny Wilsom",
    category: "Cleaning",
    address: "144/kh ,Opp. NewYork Tower , Bodakdev ",
    about: "We are eager to clean your house , office , terrace .",
    images: {
      url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwssyth80l4w07pn70ccl604",
    },
  },
  {
    id: "clwst9x9m0lfy07o6wpnuzbbk",
    name: "Office Cleaning",
    email: "office123@gmail.com",
    contactPerson: "Emma Potter",
    category: "Painting",
    address: "144/kh , opp. new York tower , Bodakdev",
    about: "We are eager to clean your house , office.",
    images: {
      url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwst6ewj0leq07o6av3an3ef",
    },
  },
  {
    id: "clwsteb3r0lj507o64zkz4u9k",
    name: "Car Cleaning",
    email: "car123@gmail.com",
    contactPerson: "Jone Doe",
    category: "Washing",
    address: "144/kh , opp. New York Tower , Bodakdev.",
    about: "We are eager to clean your car , clothes and crockery",
    images: {
      url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwstca0q0lcw07pn2hte6q3i",
    },
  },
];

const renderBuisenessList = ({ item }) => {
    // console.log("aasccac",item.category);
  return (
    <View style={{ marginTop: 10, marginLeft: 10 }}>
       
        <View style={{backgroundColor:"#ffffff",borderRadius:10,padding:10}}>
      <Image
        source={{ uri: item.images.url }}
        style={{ width: 160, height: 100, borderRadius: 10 }}
      />
      <View style={{padding:7,display:"flex",gap:3}}>
       <Text style={{fontSize:17,fontFamily:"outfit-medium"}}>{item.name}</Text>
       <Text style={{fontSize:13,fontFamily:"outfit",color:"gray"}}>{item.contactPerson}</Text>
       <Text style={{fontSize:10,fontFamily:"outfit",padding:3,color:"#8E3FFF",backgroundColor:"#f1d4fa",borderRadius:3,alignSelf:"flex-start",paddingHorizontal:7}}>{item.category}</Text>
       </View>
      </View>
    </View>
  );
};

const BusinessList = () => {
  return (
    <View>
      <View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontFamily: "outfit", fontSize: 18, marginLeft: 10 }}
            >
              Latest Business
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 12,
                marginRight: 10,
                color: "gray",
                marginTop: 5,
              }}
            >
              View All
            </Text>
          </View>
        </View>
        <View>
          <FlatList
            horizontal
            data={businessLists}
            renderItem={renderBuisenessList}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default BusinessList;
