import React from "react";
import CompanyLogos from "./Components/CompanyLogo";
import Footer from "./Components/footer";
import LandingPage from "./Components/LandingPage";
import Mission from "./Components/mission";
import Navbar from "./Components/Navbar";
import Vision from "./Components/vision";
import './index.css'
function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <LandingPage />
      <CompanyLogos />
      <Mission />
      <Vision />
      <Footer />
      </>
    </div>
  );
}

export default App;
