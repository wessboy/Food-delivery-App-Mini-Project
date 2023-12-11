import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import { XCircleIcon } from 'react-native-heroicons/outline';
const BasketHeader = ({title,restaurantTitle,onPress}) => {
  return (
    <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">{title}</Text>
            <Text className="text-center text-gray-400">
              {restaurantTitle}
            </Text>
          </View>
           {/*back button*/}
           <TouchableOpacity
            onPress={onPress}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
           >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
           </TouchableOpacity>
        </View>
  )
}

export default BasketHeader