import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline';

const DeliveryHeader = ({onPress,title}) => {
  return (
    <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={onPress}>
            <XMarkIcon color="white" size={30}/>
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">{title}</Text>
        </View>
  )
}

export default DeliveryHeader