import { View, Text,TouchableOpacity,Image } from 'react-native'
import React,{useCallback, useEffect, useMemo, useState} from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import {useDispatch,useSelector} from "react-redux"
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../../Redux/features/basketSlice';
import { urlFor } from '../../sanity';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


const DishRow = ({
  id,
  name,
  description,
  price,
  image,
}) => {
  const [isPressed,setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector( state => selectBasketItemsWithId(state,id));
  const addItemsToBasket = () =>{
      dispatch(addToBasket({id,name,description,price,image}));
      notificationHandler(name,"added","Added");
  }
  const removeItemsFromBasket = () =>{
    if(!items.length > 0) return;
    dispatch(removeFromBasket({id,name,description,price,image}));
    notificationHandler(name,"removed","Removed");
  }
  const notificationHandler = (name,action,title) => {

    Notifications.scheduleNotificationAsync({
   content: {
    title: title,
    body: `${name} ${action} add to your basket`,
    sound:true
   
  },
  trigger: null,
});

  }



  return (
    <>
    <TouchableOpacity 
    onPress={()=> setIsPressed(!isPressed)} 
    className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}
    >
      <View className="flex-row">

      <View className="flex-1 pr-2">
      <Text className="text-lg mb-1">{name}</Text>
      <Text className="text-gray-400">{description}</Text>
      <Text className="text-gray-400 mt-2">
        {price}$ 
      </Text>
      </View>
     
     {/*  dish image */}

     <View>
      <Image
       style={{
        borderWidth: 1,
        borderColor:"#F3F3F4"
       }}
       source={{uri: urlFor(image).url()}}
       className="h-20 w-20 bg-white p-4"
      />
     </View>

      </View>
    </TouchableOpacity>

      {/* selecting item number */}
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity 
            disabled={!items.length}
            onPress={removeItemsFromBasket} 
            >
              <MinusCircleIcon 
              color={items.length > 0 ? "#00CCBB":"gray"} 
              size={40}/>
            </TouchableOpacity>
            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemsToBasket}>
              <PlusCircleIcon color="#00CCBB" size={40}/>
            </TouchableOpacity>
          </View>
        </View>
      )}

    </>
  )
}

export default DishRow;