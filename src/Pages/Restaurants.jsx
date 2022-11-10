import axios from 'axios';
import React from 'react';
import {useEffect, useState} from 'react';
axios.defaults.baseURL='http://localhost:3333';
axios.defaults.withCredentials = true
axios.defaults.headers.common = `Bearer ${sessionStorage.getItem('JWT')}`;

const Restaurants = () => {
    const [Resto, setResto] = useState(null)
    let longitude =  4.34878
    let latitude =  50.85045
    useEffect(() => {
      axios.get(`/restaurants/${latitude}/${longitude}`)
      .then((response)=>{
        setResto(response.data.features)
      })}, [latitude, longitude])
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