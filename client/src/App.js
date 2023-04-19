import React from "react";
import CompanyLogos from "./Components/CompanyLogo";
import Footer from "./Components/footer";
import LandingPage from "./Components/LandingPage";
import Mission from "./Components/mission";
import Navbar from "./Components/Navbar";
import Vision from "./Components/vision";
import Home from "./Components/Home";
import { Route, Routes, useLocation } from 'react-router-dom';

import './index.css'
function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
     
      <Footer />
      </>
    </div>
  );
}

export default App;
