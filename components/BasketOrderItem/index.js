import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { urlFor } from '../../sanity';

const BasketOrderItem = ({number,image,name,price,onPress}) => {
  return (
    <View
             className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00CCBB]">{number} x</Text>

              <Image
               source={{uri:urlFor(image).url()}}
               className="h-12 w-12 rounded-full"
              />
                <Text className="flex-1">{name}</Text>

               <Text className="text-gray-600">
                ${price}
               </Text>

               <TouchableOpacity
               onPress={onPress}
               >
                <Text 
                className="text-[#00CCBB] text-xs"
                 
                >
                  Remove
                </Text>
               </TouchableOpacity>
            </View>
  )
}

export default BasketOrderItem