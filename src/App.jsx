import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import FooterComp from './Components/FooterComp';
import Home from './Pages/Home';
import Restaurants from './Pages/Restaurants';
import Maps from './Pages/Maps';
import About from './Pages/About';
import Register from './Pages/Register';
import Login from './Pages/Login';
import './Styles/MapComp.css'
import { useState, useEffect } from 'react';
import {
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import axios from "axios";


const apiKeyGeo = "284a2a00975a44d3898454f392083147"

function App() {
  const [Logged, setLogged] = useState(false)
  const [Latitude, setLatitude] = useState(50.85045);
  const [Longitude, setLongitude] = useState(4.34878);
  const [Status, setStatus] = useState(null);
  const [Resto, setResto] = useState(null);
 

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        setLatitude(position.lat);
        setLongitude(position.lng);
        map.flyTo(e.latlng, map.getZoom());
        console.log(position);
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  useEffect(() => {
    const baseURL = `https://api.geoapify.com/v2/places?categories=catering.restaurant,catering.fast_food&filter=circle:${Longitude},${Latitude},5000&bias=proximity:${Longitude},${Latitude}&limit=100&apiKey=${apiKeyGeo}`;
    axios.get(baseURL).then((response) => {
      setResto(response.data.features);
    });
  }, [Longitude, Latitude]);
  if (!Resto) return null;

  return (
    <div className="App flex flex-col min-h-screen justify-between">
      <BrowserRouter>
      <Header Logged={Logged}/>
      <Routes>
        <Route path="/" element={<Home Resto={Resto} LocationMarker={LocationMarker} Longitude={Longitude} Latitude={Latitude}/>} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <FooterComp/>
    </BrowserRouter>
    </div>
  );
}

export default App;
