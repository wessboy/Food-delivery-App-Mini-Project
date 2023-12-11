import { View, Text,ScrollView,FlatList} from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import {useNavigation, useRoute} from "@react-navigation/native"
import DishRow from '../../components/DishRow';
import BasketIcon from '../../components/BasketIcon';
import { useDispatch } from 'react-redux';
import {setRestaurant} from '../../Redux/features/restaurantSlice';
import RestaurantInfo from '../../components/RestaurantInfo';
import RestaurantHeader from '../../components/RestaurantHeader';
const RestaurantScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {params:{
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
  }} = useRoute();
  

  useLayoutEffect(()=>{
       navigation.setOptions({
        headerShown:false,
       })
  },[]);

  useEffect(()=>{
     dispatch(setRestaurant({
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
     }));

  },[])
  return (
    <>
    <BasketIcon/>
    <ScrollView>
         <RestaurantHeader 
          image={imgUrl}
          onPress={() => {navigation.goBack()}}
         />
      {/* location & rating */}
          <RestaurantInfo 
           title={title}
           rating={rating}
           genre={genre}
           address={address}
           short_description={short_description}
           note={"Have a food allergy"}
          />
      {/* Menu */}
      <View className="pb-36">
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        {/*Dish row*/}
        
          {dishes.map((dish) =>(
            <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
            />
        ))}
      </View>
    </ScrollView>
    </>
  )
}

export default RestaurantScreen