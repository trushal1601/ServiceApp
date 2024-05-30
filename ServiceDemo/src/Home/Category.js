import { View, Text, FlatList, Image, Pressable ,} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const category = [
  {
    id: "clwrr1ar00j6t07o91vnxjkya",
    name: "Cleaning",
    url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwrr0smr0j6y08o7c2m5zckd",
  },
  {
    id: "clwrr24v90j8j07o9kiclpg5g",
    name: "Repair",
    url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwrr1x5u0j9308o7ghcct35y",
  },
  {
    id: "clwrr3neq0jab07o9o5fcrd01",
    name: "Painting",
    url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwrr3cb10j9u07o9kqac8pbp",
  },
  {
    id: "clwrr49mz0jc808o7gqb8z3e5",
    name: "Shiping",
    url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwrr43j90jby08o75cjwhc77",
  },
];

// const renderCategory 

const Category = () => {
    const navigation = useNavigation();
  return (
    <View>
      <View style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 18,
              marginLeft: 10,
            }}
          >
            Categories
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
        <FlatList
        //   horizontal
          data={category}
          numColumns={4}
        //   renderItem={renderCategory}
        renderItem={({item}) => (
              <View
                style={{flex:1,alignItems:"center"}}
              >
                
                  <Pressable style={{backgroundColor: "#EDEDED",padding:17,borderRadius:99}} 
                  onPress={() =>
                      navigation.push('BusinessListByCategory',{data:item})
                  }
                  >
                  <Image
                    source={{ uri: item.url }}
                    style={{
                      width: 25,
                      height: 25,
                     
                    }}
                  />
                  </Pressable>
                  <Text
                    style={{  fontFamily: "outfit-medium", marginTop: 5 }}
                  >
                    {item.name}
                  </Text>
                </View>
              
            
  )}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Category;
