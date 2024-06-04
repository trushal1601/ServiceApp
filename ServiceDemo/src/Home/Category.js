import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const category = [
  {
    id: "clwrr1ar00j6t07o91vnxjkya",
    name: "Cleaning",
    url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwrr0smr0j6y08o7c2m5zckd",
    data: [
      {
        email: "house123@gmail.com",
        name: "House Cleaning",
        address: "14/h , Opp.NewYork Tower, NewYork",
        contactPerson: "Steven Wilson",
        images: {
          url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwssyth80l4w07pn70ccl604",
          // ur: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwst6ewj0leq07o6av3an3ef",
          // img3: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwstca0q0lcw07pn2hte6q3i",
        },
        about:
          "I have a passion for maintaining a clean and organized home, believing that a tidy environment promotes both physical and mental well-being. I enjoy the process of transforming spaces through dusting, vacuuming, and sanitizing, ensuring every corner shines.",
      },
      {
        email: "washing123@gmail.com",
        name: "Washing clothes",
        address: "14/h , Opp.NewYork Tower, NewYork",
        contactPerson: "Emma Potter",
        images: {
          url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwst6ewj0leq07o6av3an3ef",
        },
        about:
          "I take great care in washing clothes, ensuring that every garment is cleaned and cared for properly. I pay attention to fabric types and washing instructions to preserve the quality and longevity of my clothes. The fresh scent and crisp feel of clean laundry bring me a sense of satisfaction.",
      },
      {
        email: "floor123@gmail.com",
        name: "Floor Cleaning",
        address: "14/h , Opp.NewYork Tower, NewYork",
        contactPerson: "Harry Will",
        images: {
          url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwstca0q0lcw07pn2hte6q3i",
        },
        about:"I take great pride in keeping floors spotless, understanding their impact on the overall cleanliness and aesthetic of a home. Whether it's vacuuming carpets, mopping hardwood, or scrubbing tiles, I ensure every surface gleams."
      },
    ],
  },

  {
    id: "clwrr24v90j8j07o9kiclpg5g",
    name: "Repair",
    url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwrr1x5u0j9308o7ghcct35y",
    data: [
      {
        email: "car123@gmail.com",
        name: "Car Repair",
        address: "14/h , Opp.NewYork Tower, NewYork",
        contactPerson: "Bruce Willis",
        images: {
          url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwstca0q0lcw07pn2hte6q3i",
        },
        about:"I have a deep passion for car repair, finding satisfaction in diagnosing and fixing automotive issues. With hands-on experience and a keen eye for detail, I ensure vehicles run smoothly and safely. I enjoy the challenge of troubleshooting and the reward of seeing a well-functioning car."
      },
    ],
  },
  {
    id: "clwrr49mz0jc808o7gqb8z3e5",
    name: "Painting",
    url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwrr3cb10j9u07o9kqac8pbp",
    // data: {
    //   id: "clwsteb3r0lj507o64zkz4u0k",
    //   name: "No Business Found",
    //   email: "paint123@gmail.com",
    //   contactPerson: "No Business Found",
    //   category: {
    //     name: "No Business Found",
    //   },
    //   address: "No Business Found",
    //   about: "We are eager to clean your car , clothes and crockery",
    //   images: {
    //     url: "https://ap-south-1.graphalssets.com/clwqb4fxb01jn07pjfidj6bsx/clwssyth80l4w07pn70ccl604",
    //     ur: "https://ap-south-1.graphdassets.com/clwqb4fxb01jn07pjfidj6bsx/clwst6ewj0leq07o6av3an3ef",
    //     img3: "https://ap-south-1.graphassetsf.com/clwqb4fxb01jn07pjfidj6bsx/clwstca0q0lcw07pn2hte6q3i",
    //   },
    // },
    cp: {
      contactPerson: "No Business Found",
      name: "No Business Found",
    },
    cp2: {
      contactPerson: "No Business Found",
      name: "No Business Found",
    },
  },
  {
    id: "clwrr49mz0jc808o7gqb8z3e5",
    name: "Shiping",
    url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwrr43j90jby08o75cjwhc77",
    // data: {
    //   id: "clwsteb3r0lj507o64zkz4u0k",
    //   name: "No Business Found",
    //   email: "car123@gmail.com",
    //   contactPerson: "No Business Found",
    //   category: {
    //     name: "No Business Found",
    //   },
    //   address: "No Business Found",
    //   about: "We are eager to clean your car , clothes and crockery",
    //   images: {
    //     url: "https://ap-south-1.graphalssets.com/clwqb4fxb01jn07pjfidj6bsx/clwssyth80l4w07pn70ccl604",
    //     ur: "https://ap-south-1.graphdassets.com/clwqb4fxb01jn07pjfidj6bsx/clwst6ewj0leq07o6av3an3ef",
    //     img3: "https://ap-south-1.graphassetsf.com/clwqb4fxb01jn07pjfidj6bsx/clwstca0q0lcw07pn2hte6q3i",
    //   },
    // },
    cp: {
      contactPerson: "No Business Found",
      name: "No Business Found",
    },
    cp2: {
      contactPerson: "No Business Found",
      name: "No Business Found",
    },
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
          renderItem={({ item }) => (
            <View style={{ flex: 1, alignItems: "center" }}>
              <Pressable
                style={{
                  backgroundColor: "#EDEDED",
                  padding: 17,
                  borderRadius: 99,
                }}
                onPress={() =>
                  navigation.push("BusinessListByCategory", { data: item })
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
              <Text style={{ fontFamily: "outfit-medium", marginTop: 5 }}>
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
