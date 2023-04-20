import React from "react";
import CompanyLogos from "./Components/CompanyLogo";
import Footer from "./Components/footer";
import LandingPage from "./Components/LandingPage";
import Mission from "./Components/mission";
import Navbar from "./Components/Navbar";
import Signing from "./Components/Signing";
import Vision from "./Components/vision";
import Home from "./Components/Home";
import { Route, Routes, useLocation } from 'react-router-dom';
import './index.css'
import Client from "./Components/Client";

function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signing' element={<Signing/>}></Route>
        <Route path='/Client' element={<Client/>}></Route>


      </Routes>
     
      <Footer />
      </>
    </div>
  );
}

export default App;
