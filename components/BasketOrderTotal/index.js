import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'

const BasketOrderTotal = ({total,onPress,title,loading}) => {
  return (
   <View className="p-5 bg-white mt-5 space-y-4">
         <View className="flex-row justify-between">
           <Text className="text-gray-400">Subtotal</Text>
           <Text className="text-gray-400">${total.toFixed(2)}</Text>
         </View>
          
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Order Total</Text>
           <Text className="text-gray-400">${(total + 5.99).toFixed(2)}</Text>
          </View>

          <TouchableOpacity 
          onPress={onPress} 
          disabled={loading}
          className="rounded-lg bg-[#00CCBB] p-4">
            <Text className="text-center text-white text-lg font-bold">{title}</Text>
          </TouchableOpacity>
        </View>
  )
}

export default BasketOrderTotal