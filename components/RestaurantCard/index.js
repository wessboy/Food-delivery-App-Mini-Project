import { View, Text ,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {StarIcon,MapPinIcon} from "react-native-heroicons/outline"
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../../sanity'
const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
}) => {
   const navigation = useNavigation();
   const navigationToRestaurantHandler = () => navigation.navigate("Restaurant",{
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
});

  return (
    <TouchableOpacity 
    className="bg-white mr-3 shadow"
     onPress={navigationToRestaurantHandler}
    >
      {/* w-64 h-36 */}
      <Image
       source={{
        uri: urlFor(imgUrl).url(),
       }}
       className=" h-36 max-w-fit rounded-sm"
      />
      <View className="px-3 pb-4">
        {/* title */}
        <Text className="font-bold text-lg pt-2">{title}</Text>
        {/* rating */}
        <View className="flex-row items-center space-x-1">
         <StarIcon color="green" opacity={0.5} size={22}/>
         <Text className="text-xs text-gray-500">
          <Text className="text-green-500">{rating}</Text> . {genre}
         </Text>
        </View>
        {/* location */}
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22}/>
          <Text>Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard