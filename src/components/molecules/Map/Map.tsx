'use client'
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '@src/config/getEnv';

const Map = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: GOOGLE_MAPS_API_KEY})
  const map = {
    height: '25vw'
  }
  const center = useMemo(() => ({lat: -23.0463704, lng: -47.1211043}), [])

  if(!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <GoogleMap 
    center={center}
    zoom={18}
    mapContainerStyle={map}
    >
      <Marker position={center}/>
    </GoogleMap>
  )
  
};

export default Map;
