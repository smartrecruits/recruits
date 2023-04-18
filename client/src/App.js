import React from "react";
import CompanyLogos from "./Components/CompanyLogo";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import './index.css'
function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <LandingPage />
      <CompanyLogos />
      </>
    </div>
  );
}

export default App;
