import React from "react";
import CompanyLogos from "./Components/CompanyLogo";
import Footer from "./Components/footer";
import LandingPage from "./Components/LandingPage";
import Mission from "./Components/mission";
import Navbar from "./Components/Navbar";
import Signing from "./Components/Signing";
import Vision from "./Components/vision";
import Home from "./Components/Home";
import './index.css'
import {  Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      {/* <LandingPage /> */}
      <Routes>
      <Route path="/" eleent={<Home/>} />
      <Route path="/Signing" element={<Signing/>} />
      </Routes>
      {/* <CompanyLogos />
      <Mission />
      <Vision /> */}
      <Footer />
      </>
    </div>
  );
}

export default App;
