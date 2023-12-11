import { View,TextInput} from 'react-native'
import React from 'react'
import{MagnifyingGlassIcon,AdjustmentsVerticalIcon} from "react-native-heroicons/outline"
const HomeSearchBar = () => {
  return (
   <View className="flex-row items-center space-x-2 mx-4 px-2">
        <View className="flex-row space-x-2 flex-1  bg-gray-200 p-3">
          <MagnifyingGlassIcon size={25} color="#00CCBB"/>
           <TextInput placeholder="find your meal..."
             keyboardType="default"
           />
        </View>
         <AdjustmentsVerticalIcon size={25} color="#00CCBB"/>
      </View>
  )
}

export default HomeSearchBar