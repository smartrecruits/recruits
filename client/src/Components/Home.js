import React from "react";
import CompanyLogos from "./CompanyLogo";
import Footer from "./footer";
import LandingPage from "./LandingPage";
import Mission from "./mission";
import Navbar from "./Navbar";
import Vision from "./vision";

function Home(){
    return(
        <div className="App">
        <>
        {/* <Navbar /> */}
        <LandingPage />
        <CompanyLogos />
        <Mission />
        <Vision />
        {/* <Footer /> */}
        </>
      </div>
    )

} 
export default Home