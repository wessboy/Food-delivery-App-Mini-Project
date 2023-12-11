import { View,SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import {selectRestaurant} from '../../Redux/features/restaurantSlice';
import DeliveryFooter from '../../components/DeliveryFooter';
import DeliverMap from '../../components/DeliveryMap';
import DeliveryHeader from '../../components/DeliveryHeader';
import DeliveryEstimate from '../../components/DeliveryEstimate';
const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50 mt-5">
        {/* header */}
          <DeliveryHeader 
            title={"Order Help"}
            onPress={()=> navigation.navigate("Home")}
          />
        {/* Estimate sign */}
        <DeliveryEstimate 
          restaurantTitle={restaurant.title}
          imageUrl={"https://links.papareact.com/fls"}
        />
      </SafeAreaView>

      {/* Map */}
      <DeliverMap 
        lat={restaurant.lat}
        long={restaurant.long}
        latDelta={0.005}
        longDelta={0.005}
        restaurantTitle={restaurant.title}
        description={restaurant.short_description}
      /> 

       {/* footer */}
       <DeliveryFooter 
         imageUrl={"https://links.papareact.com/wru"}
         Rider={"Forrest Gamp"}
       />
    </View>
  )
}

export default DeliveryScreen