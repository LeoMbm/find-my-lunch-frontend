import './App.css';
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
import { useState } from 'react';

function App() {
  const [logged, setlogged] = useState(true)

  return (
    <div className="App flex flex-col min-h-screen justify-between">
      <BrowserRouter>
      <Header logged={logged}/>
      <Routes>
        <Route path="/" element={<Home />} />
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
