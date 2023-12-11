import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import CategoryCard from '../CategoryCard'
import sanityClient, { urlFor } from '../../sanity'

const Categories = () => {
  const [categories,setCategories] = useState([])
  useEffect(()=>{
    sanityClient.fetch(
      `
      *[_type == "category"]
      `
    ).then((data)=> setCategories(data))
  },[])
  return (
  <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
         contentContainerStyle={{
           paddingHorizontal:15,       
           paddingTop:10
        }}
        data={categories}
        renderItem={({item}) => (<CategoryCard 
          key={item._id}
         imgUrl={urlFor(item.image).width(200).url()} 
          title={item.name}
         />)}
        keyExtractor={item => item.id}
      />
 
  )
}

export default Categories