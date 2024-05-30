import { View, Text, FlatList } from 'react-native'
import React from 'react'


const getData=[
        {
          id: "clwst59ej0l8307pnuin5tc3j",
          name: "HouseCleaning",
          email: "house123@gmail.com",
          contactPerson: "9581234874",
          category: {
            name: "Cleaning"
          },
          address: "144/kh ,Opp. NewYork Tower , Bodakdev ",
          about: "We are eager to clean your house , office , terrace .",
          images: 
            {
              url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwssyth80l4w07pn70ccl604"
            }
          
        },
        {
          id: "clwst9x9m0lfy07o6wpnuzbbk",
          name: "Reapiring",
          email: "office123@gmail.com",
          contactPerson: "9541364501",
          category: {
            name: "Repairing"
          },
          address: "144/kh , opp. new York tower , Bodakdev",
          about: "We are eager to clean your house , office.",
          images: 
            {
              "url": "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwst6ewj0leq07o6av3an3ef"
            }
          
        },
        {
            id: "clwsteb3r0lj507o64zkz4u9k",
            name: "Painting",
            email: "car123@gmail.com",
            contactPerson: "8541203698",
            category: {
              name: "Painting"
            },
            address: "144/kh , opp. New York Tower , Bodakdev.",
            about: "We are eager to clean your car , clothes and crockery",
            images: 
              {
                url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwstca0q0lcw07pn2hte6q3i"
              }
            
          },
        {
          id: "clwsteb3r0lj507o64zkz4u0k",
          name: "Shiping",
          email: "car123@gmail.com",
          contactPerson: "8541203698",
          category: {
            name: "Shiping"
          },
          address: "144/kh , opp. New York Tower , Bodakdev.",
          about: "We are eager to clean your car , clothes and crockery",
          images: 
            {
              url: "https://ap-south-1.graphassets.com/clwqb4fxb01jn07pjfidj6bsx/clwstca0q0lcw07pn2hte6q3i"
            }
          
        }
      ]

const renderData=({item})=>{
    // console.log("afsasc",item.name);
    return(
        <View>
            <Text>{item.category.name}</Text>
            <Text>{item.category.name}</Text>
        </View>
    )
}
const BusinessListByCategory = ({route}) => {
  const {data}=route.params
  console.log("fsef",data);
  return (
    <View>
      <FlatList
          data={getData}
          renderItem={renderData}
          showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default BusinessListByCategory