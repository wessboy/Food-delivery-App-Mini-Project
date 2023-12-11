import { SafeAreaView,ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Categories from '../../components/Categories'
import FeaturedRow from '../../components/FeaturedRow'
import sanityClient from '../../sanity'
import HomeHeader from '../../components/HomeHeader'
import HomeSearchBar from '../../components/HomeSearchBar'


const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCatagories,setFeaturedCategories] = useState([]);
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    });
  },[]);

  useEffect(()=>{
  sanityClient.fetch(
    `
    *[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->
     }
    }
    `
  ).then((data)=>{
    setFeaturedCategories(data);
    console.log(featuredCatagories);
  });
  },[])
  return (
    <SafeAreaView className="mt-7 bg-white pt-3">
      
      {/* Header */}
      <HomeHeader 
        imageUrl={"https://links.papareact.com/wru"}
      />

      {/* search */}
       <HomeSearchBar/>

      {/* body */}
      <ScrollView 
      className="bg-gray-100"
      >
        {/* cateogries */}
        <Categories/>
        {/* featuredRow  */}
        {featuredCatagories.map((category)=>(
           <FeaturedRow
           key={category._id}
          id={category._id}
          title={category.name}
          description={category.short_description}
        />
        ) )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen