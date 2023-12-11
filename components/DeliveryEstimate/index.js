import { View, Text,Image } from 'react-native'
import React from 'react'
import * as Progress from "react-native-progress"
const DeliveryEstimate = ({restaurantTitle,imageUrl}) => {
  return (
    <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
           <View className="flex-row justify-between">
             <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
             </View>
             <Image
               source={{
                uri:imageUrl
               }}

               className="h-20 w-20"
             />
           </View>
           <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

           <Text className="mt-3 text-gray-500">
            Your order at {restaurantTitle} is being prepared
           </Text>
        </View>
  )
}

export default DeliveryEstimate