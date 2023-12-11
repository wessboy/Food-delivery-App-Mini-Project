import { View,SafeAreaView, TextInput,StyleSheet } from 'react-native'
import React, {useEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import {selectRestaurant} from '../../Redux/features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../../Redux/features/basketSlice';
import BasketHeader from '../../components/BasketHeader';
import BasketOrderTotal from '../../components/BasketOrderTotal';
import { CardField,useConfirmPayment } from '@stripe/stripe-react-native';
const API_URL = "http://localhost:3000";
const PaymentScreen = () => {
const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  //payment logic
  const [email,setEmail] = useState();
  const [cardDetails,setCardDetails] = useState();
  const {confirmPayment,loading} = useConfirmPayment();
  const fetchPaymentIntentClientSecret = async () =>{
    const response = await fetch(`${API_URL}/create-payment-intent`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      }
    });

    const {clientSecret,error} = await response.json();

    return {clientSecret,error};
  }

  const handlePayment = async ()=>{

      if(!cardDetails?.complete || !email){
         alert("enter Email and Card Details");
         return;
      }

      const billingDetails = {
        email:email
      }

      try{
            const {clientSecret,error} = await fetchPaymentIntentClientSecret();
            if(error){
                 console.log("Unable To process payment");
             
            }
            else{
              const {PaymentIntent,error} = await confirmPayment(clientSecret,{
                type:"Card",
                billingDetails:billingDetails,
              })

              if(error){
                alert(`Payment confirmation Error ${error.message}`)
                
              }
              else if(PaymentIntent){
                //notification payment success
                alert("Payment Successful");
              }
            }

      }
      catch(e){
           console.log(e);
      }
  }
  return (
     <SafeAreaView className="flex-1 bg-white mt-6">
      
      <View className="flex-1 bg-gray-100">

        <BasketHeader
         title={"Payment"}
         restaurantTitle={restaurant.title}
         onPress={navigation.goBack}
        />
        
       {/* payment forum */}
        <View className="flex-1 bg-white my-6  justify-center mx-2">
         <TextInput 
         autoCapitalize="none"
         placeholder="E-mail"
         keyboardType="email-address"
          style={styles.input}
          onChange={value => setEmail(value.nativeEvent.text)}
         />

        <CardField
         postalCodeEnabled={true}
         placeholders={{
          number:"4242 4242 4242 4242",
         }}
         cardStyle={styles.card}
         style={styles.cardContainer} 
         onCardChange={cardDetails =>{
          setCardDetails(cardDetails);
         }}        
        />
        </View>
        {/* total order component */}
        <BasketOrderTotal 
         onPress={handlePayment}
         total={basketTotal}
         title={"Confirm Order"}
        />
      
      </View>
     </SafeAreaView>
  )
}

export default PaymentScreen;

const styles = StyleSheet.create({
   input:{
    fontSize:20,
    height:50,
    padding:10,
    backgroundColor:"#efefefef",
    marginHorizontal:5
   },
   card:{
    backgroundColor:"#efefefef"
   },
   cardContainer:{
    height:50,
    marginVertical:30,
    marginHorizontal:5,
    alignContent:"space-around"
   }
})