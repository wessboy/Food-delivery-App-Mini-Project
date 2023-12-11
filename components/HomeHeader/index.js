import { View, Text,Image } from 'react-native'
import React from 'react'
import{UserIcon,ChevronDownIcon} from "react-native-heroicons/outline"
const HomeHeader = ({imageUrl}) => {
  return (
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-2">
        <Image
         source={{uri:imageUrl }}
         className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location
          <ChevronDownIcon size={20} color="#00CCBB"/>
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB"/>
      </View>
  )
}

export default HomeHeader