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
import Cookie  from 'universal-cookie';
import {
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import axios from "axios";
import UserSettings from './Pages/UserSettings';
import OrderHistory from './Pages/OrderHistory';
import Billing from './Pages/Billing';
import Account from './Pages/Account';



function App() {
  // TODO: Stylize btn logout

  const [Latitude, setLatitude] = useState(50.85045);
  const [Longitude, setLongitude] = useState(4.34878);
  const [Status, setStatus] = useState(null);
  const [Resto, setResto] = useState(null);
  // TODO: Set cookie in session storage
  const cookie = new Cookie()
  const authToken = sessionStorage.getItem('JWT')
  const [Logged, setLogged] = useState(()=>{
    if(authToken){

      return true
    }
    return false
  })
 // TODO: Add GeoAPI in backend for retrieve list of restaurant

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

      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }






  useEffect(() => {
    const baseURL = `http://localhost:3333/restaurants/${Latitude}/${Longitude}`;
    axios.get(baseURL).then((response) => {
      setResto(response.data.features);
    });
  }, [Longitude, Latitude]);
  if (!Resto) return null;





// console.log(Resto);

  return (
    <div className="App flex flex-col min-h-screen justify-between">
      <BrowserRouter>
      <Header Logged={Logged} setLogged={setLogged}/>
      <Routes>
        <Route path="/" element={<Home Resto={Resto} Logged={Logged} LocationMarker={LocationMarker} Longitude={Longitude} Latitude={Latitude}/>} />
        {/* <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/maps" element={<Maps />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setLogged={setLogged} />} />
        <Route path="/settings" element={<UserSettings setLogged={setLogged}/>} />
        <Route path="/orders" element={<OrderHistory setLogged={setLogged}/>} />
        <Route path="/billing" element={<Billing setLogged={setLogged}/>} />
        <Route path="/account" element={<Account setLogged={setLogged}/>} />
      </Routes>
      <FooterComp/>
    </BrowserRouter>
    </div>
  );
}

export default App;
