import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Modal,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";

const BusinessDetail = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();
  const [readmore, setReadmore] = useState(false);
  const [showModel, setshowModel] = useState(false);
  const [timeList, setTimeList] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [note, setNote] = useState();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeList(timeList);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ height: "90%" }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity
            style={{ position: "absolute", zIndex: 10, padding: 10 }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <Image source={{ uri: data.images.url }} style={{ width: "100%", height: 300 }} />
        <View style={{ padding: 20, display: "flex", gap: 7 }}>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>{data.name}</Text>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 20, color: "#8E3FFF" }}>
              {data.contactPerson} 🌟
            </Text>
            <Text
              style={{
                color: "#8E3FFF",
                backgroundColor: "#f1d4fa",
                padding: 5,
                borderRadius: 5,
                fontSize: 14,
              }}
            >
              {data.email}
            </Text>
          </View>
          <Text style={{ fontSize: 17, fontFamily: "outfit", color: "gray" }}>
            <Entypo name="location-pin" size={25} color="#8E3FFF" />
            {data.address}
          </Text>
          <View
            style={{
              borderWidth: 0.4,
              borderColor: "gray",
              marginTop: 15,
              marginBottom: 15,
            }}
          ></View>
          <View>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 19 }}>About me</Text>
            <Text
              style={{
                fontFamily: "outfit",
                color: "gray",
                fontSize: 16,
                lineHeight: 28,
              }}
              numberOfLines={readmore ? 20 : 5}
            >
              {data.about}
            </Text>
            <Pressable onPress={() => setReadmore(!readmore)}>
              <Text style={{ color: "#8E3FFF", fontSize: 16, fontFamily: "outfit" }}>
                {readmore ? "Read Less" : "Read More"}
              </Text>
            </Pressable>
            <View
              style={{
                borderWidth: 0.4,
                borderColor: "gray",
                marginTop: 15,
                marginBottom: 15,
              }}
            ></View>
          </View>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row", margin: 8, gap: 5 }}>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#8E3FFF",
            borderRadius: 99,
            flex: 1,
          }}
            onPress={()=>Linking.openURL('mailto:'+"trushal.prajapati1601@gmail.com"+"?subject=I am looking for your Service&body=Hi There,")}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-medium",
              color: "#8E3FFF",
              fontSize: 18,
            }}
          >
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: "#8E3FFF",
            borderWidth: 1,
            borderColor: "#8E3FFF",
            borderRadius: 99,
            flex: 1,
          }}
          onPress={() => setshowModel(true)}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-medium",
              color: "white",
              fontSize: 18,
            }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={showModel}>
      <ScrollView>
      
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10, padding: 10 }}>
            <TouchableOpacity onPress={() => setshowModel(false)}>
              <Ionicons name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 23, fontFamily: "outfit-medium" }}>Booking</Text>
          </View>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 19, marginLeft: 20 }}>
            Select Date
          </Text>
          <View
            style={{
              backgroundColor: "#f1d4fa",
              padding: 20,
              borderRadius: 15,
              margin: 15,
            }}
          >
            <CalendarPicker
              onDateChange={setSelectedDate}
              width={340}
              minDate={Date.now()}
              todayBackgroundColor="black"
              todayTextStyle={{ color: "white" }}
              selectedDayColor="#8E3FFF"
              selectedDayTextColor="white"
            />
          </View>
          <View style={{ gap: 10 }}>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 19,
                marginLeft: 20,
              }}
            >
              Select Time Slot
            </Text>
            <FlatList
              data={timeList}
              style={{ marginLeft: 10 }}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={() => setSelectedTime(item.time)}
                  >
                    <Text
                      style={[
                        selectedTime == item.time
                          ? styles.selectedTime
                          : styles.unSelectedTime,
                      ]}
                    >
                      {item.time}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            <View style={{ margin: 15 }}>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 19,
                }}
              >
                Any Suggestion Note
              </Text>
              <TextInput
                placeholder="Note"
                numberOfLines={4}
                multiline={true}
                onChangeText={(text) => setNote(text)} // Corrected from onPress to onChangeText
                style={{
                  borderWidth: 1,
                  borderRadius: 15,
                  textAlignVertical: "top",
                  padding: 10,
                  fontFamily: "outfit",
                  fontSize: 16,
                  borderColor: "#8E3FFF",
                }}
              />
              <TouchableOpacity
                style={{ marginTop: 20 }}
                onPress={() => console.warn("Service Booked")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "outfit-medium",
                    fontSize: 17,
                    backgroundColor: "#8E3FFF",
                    color: "white",
                    padding: 13,
                    borderRadius: 99,
                    elevation: 10,
                  }}
                >
                  Confirm & Book
                </Text>
              </TouchableOpacity>
            </View>
         
        </ScrollView>
        </Modal>
      </View>
    );
  };
  
  export default BusinessDetail;
  
  const styles = StyleSheet.create({
    selectedTime: {
      padding: 10,
      borderWidth: 1,
      borderColor: "#8E3FFF",
      borderRadius: 99,
      paddingHorizontal: 18,
      color: "white",
      backgroundColor: "#8E3FFF",
    },
    unSelectedTime: {
      padding: 10,
      borderWidth: 1,
      borderColor: "#8E3FFF",
      borderRadius: 99,
      paddingHorizontal: 18,
      color: "#8E3FFF",
    },
  });
  
