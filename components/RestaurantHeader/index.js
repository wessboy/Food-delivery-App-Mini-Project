import { View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { ArrowLeftIcon} from 'react-native-heroicons/outline';
import { urlFor } from '../../sanity';
const RestaurantHeader = ({image,onPress}) => {
  return (
     <View className="relative">
        <Image
          source={{uri: urlFor(image).url()}}
          className="w-full h-56 bg-gray-300 p-4"
        />
         {/* arrow button */}
         <TouchableOpacity
           onPress={onPress}
           className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
         >
          <ArrowLeftIcon size={20} color="#00CCBB"/>
         </TouchableOpacity>
      </View>
  )
}

export default RestaurantHeader