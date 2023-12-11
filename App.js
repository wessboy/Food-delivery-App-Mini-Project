import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
//import PaymentScreen from './screens/PaymentScreen';
//import { StripeProvider } from '@stripe/stripe-react-native';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
        <Stack.Screen name="PreparingOrder" 
        component={PreparingOrderScreen}
        options={{presentation:"fullScreenModal",headerShown:false}}
        />
         <Stack.Screen name="Basket" component={BasketScreen}
          options={{
            presentation:"modal",
            headerShown:false
          }}
        />
        <Stack.Screen name="Delivery" component={DeliveryScreen} 
          options={{headerShown:false}}
        />
    </Stack.Navigator>
    </Provider>
    </NavigationContainer>
  );
}

