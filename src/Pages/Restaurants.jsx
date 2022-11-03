import axios from 'axios';
import React from 'react';
import {useEffect, useState} from 'react';

const apiKeyGeo = "284a2a00975a44d3898454f392083147"
const Restaurants = () => {
    const [Resto, setResto] = useState(null)
    let longitude =  4.34878
    let latitude =  50.85045
    useEffect(() => {
      const baseURL = `https://api.geoapify.com/v2/places?categories=catering.restaurant,catering.fast_food&filter=circle:${longitude},${latitude},5000&bias=proximity:${longitude},${latitude}&limit=100&apiKey=${apiKeyGeo}`
      axios.get(baseURL)
      .then((response)=>{
        console.log(response.data.features[0]);
        setResto(response.data.features)
      })}, [])
      if(!Resto) return null;
      
   return (
        <div>
{
  Resto.map((todo) => (
    <p key={todo.properties.lon}>
      {todo.properties.address_line1} 
    </p>
  ))
}
        </div>
    );
};

export default Restaurants;