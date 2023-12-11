
import React from 'react'
import MapView,{Marker} from 'react-native-maps';
const DeliverMap = ({lat,long,latDelta,longDelta,restaurantTitle,description}) => {
  return (
    <MapView
         initialRegion={{
          latitude:lat,
          longitude:long,
          latitudeDelta:latDelta,
          longitudeDelta:longDelta,
         }}

         className="flex-1 mt-10 z-100"
         mapType="mutedStandard"
       >
          
        <Marker
          coordinate={{
             latitude:lat,
          longitude:long,
          }}
          title={restaurantTitle}
          description={description}
          identifier="origin"
          pinColor="#00CCBB"
        />

       </MapView> 
  )
}

export default DeliverMap