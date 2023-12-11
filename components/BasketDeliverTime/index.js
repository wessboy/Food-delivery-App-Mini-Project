import { View, Text,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const BasketDeliverTime = ({imgUrl,description,action}) => {
  return (
     <View 
        className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5"
       >
        <Image 
        source={{
          uri:imgUrl
        }}
         className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <Text className="flex-1">{description}</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCBB]">{action}</Text>
        </TouchableOpacity>
       </View>
  )
}

export default BasketDeliverTime