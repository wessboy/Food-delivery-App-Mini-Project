import { View, Text, SafeAreaView, Touchable, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import {selectRestaurant} from '../../Redux/features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../../Redux/features/basketSlice';
import BasketHeader from '../../components/BasketHeader';
import BasketDeliverTime from '../../components/BasketDeliverTime';
import BasketOrderItem from '../../components/BasketOrderItem';
import BasketOrderTotal from '../../components/BasketOrderTotal';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();

  const [groupedItemsInBasket,setGroupedItemsInBasket] = useState([]);

  //if the value of items doesn't change it won't recompute the value
  useEffect(()=>{
    const groupedItems = items.reduce((results,item)=>{
      (results[item.id] = results[item.id] || []).push(item);
      return results
    },{});
    setGroupedItemsInBasket(groupedItems);
  },[items])
  return (
     <SafeAreaView className="flex-1 bg-white mt-6">
      
      <View className="flex-1 bg-gray-100">

        <BasketHeader
         title={"Basket"}
         restaurantTitle={restaurant.title}
         onPress={navigation.goBack}
        />
        {/* deliver time */}
        <BasketDeliverTime 
        imgUrl={"https://links.papareact.com/wru"}
        action={"Change"}
        description={"Deliver in 50-75 min"}
        />
       {/* order list */}
        <ScrollView>
          {Object.entries(groupedItemsInBasket).map(([key,items])=>(
             <BasketOrderItem 
                key={key}
                number={items.length}
                image={items[0]?.image}
                name={items[0]?.name}
                price={items[0].price}
                onPress={()=> dispatch(removeFromBasket({id: key}))}
             />
          ))}
        </ScrollView>
        {/* total order component */}
        <BasketOrderTotal 
         onPress={() => navigation.navigate("PreparingOrder")}
         total={basketTotal}
         title={"Place Order"}
        />
      </View>
     </SafeAreaView>
  )
}

export default BasketScreen;