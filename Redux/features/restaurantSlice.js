 import { createSlice } from "@reduxjs/toolkit";
 import { createSelector } from "reselect";
 const initialState = {
  restaurant:{
    id:null,
    imgUrl:null,
    title:null,
    rating:null,
    genre:null,
    address:null,
    short_description:null,
    dishes:null,
  }
 };

 export const restaurantSlice = createSlice({
    name:"restaurant",
    initialState,
    reducers:{
      setRestaurant:(state,action) => {
        state.restaurant = action.payload;
      }
    }
 });

 export const {setRestaurant} = restaurantSlice.actions;
 export const selectRestaurant = (state) => state.restaurant.restaurant;
 /*export const selectRestaurant = createSelector(
  [selectRestaurantState],
  (restaurantState) => restaurantState.restaurant.restaurant
);*/
 export default restaurantSlice.reducer;